"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Safe portal component for Next.js
const ClientOnlyPortal = ({ children, selector }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Create portal container if it doesn't exist
    if (!document.getElementById(selector)) {
      const portalContainer = document.createElement('div');
      portalContainer.id = selector;
      document.body.appendChild(portalContainer);
    }
    
    return () => setMounted(false);
  }, [selector]);
  
  return mounted ? createPortal(children, document.getElementById(selector)) : null;
};

const Modal = ({ onClose, toggle }) => {
  return (
    <ClientOnlyPortal selector="my-modal">
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div
          className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
              py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8"
        >
          <p className="font-light">Do you like to play the background music?</p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggle}
              className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration mismatch by confirming we're client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle audio play attempts with promise handling
  const attemptPlayAudio = () => {
    if (!audioRef.current) return Promise.reject("No audio element");
    
    try {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        return playPromise
          .then(() => {
            setIsPlaying(true);
            return true;
          })
          .catch((error) => {
            console.error("Audio play failed:", error);
            setIsPlaying(false);
            return false;
          });
      }
      return Promise.resolve(true);
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
      return Promise.resolve(false);
    }
  };

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying && audioRef.current) {
      attemptPlayAudio();
    }

    // Remove event listeners once processed
    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;
    
    // Make sure audio is loaded
    if (audioRef.current) {
      audioRef.current.load();
    }

    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");
    const consentValid = 
      consent && 
      consentTime && 
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date();

    if (consentValid) {
      // Set the initial state based on saved preference
      setIsPlaying(consent === "true");

      if (consent === "true") {
        // Set up event listeners for user interaction to trigger audio
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction, { once: true })
        );
      }
    } else {
      setShowModal(true);
    }
    
    // Cleanup event listeners
    return () => {
      ["click", "keydown", "touchstart"].forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
      );
    };
  }, [isClient]);

  const toggle = () => {
    // Only proceed if we're client-side and have audio
    if (!isClient || !audioRef.current) return;
    
    const newState = !isPlaying;
    
    if (newState) {
      attemptPlayAudio().then(success => {
        if (success) {
          localStorage.setItem("musicConsent", "true");
          localStorage.setItem("consentTime", new Date().toISOString());
        }
      });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("musicConsent", "false");
      localStorage.setItem("consentTime", new Date().toISOString());
    }
    
    setShowModal(false);
  };
  
  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("musicConsent", "false");
    localStorage.setItem("consentTime", new Date().toISOString());
  };

  // If we're not client-side yet, return minimal markup to avoid hydration issues
  if (!isClient) {
    return <div className="fixed top-4 right-2.5 xs:right-4 z-50 group"></div>;
  }

  return (
    <div className="fixed top-4 right-3 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={closeModal} toggle={toggle} />
      )}

      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label="Sound control button"
        name="Sound control button"
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;