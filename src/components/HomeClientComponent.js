
"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import at from "../../public/background/At.jpg";
import ItemLayout from "./about/ItemLayout";
import Link from "next/link";

export default function HomeClientComponent() {
    const modelSectionRef = useRef(null);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "Full Stack Developer",
        "Software Developer",
        "UI/UX Developer"
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowModel(true);
                }
            },
            { threshold: 0.1 }
        );

        if (modelSectionRef.current) {
            observer.observe(modelSectionRef.current);
        }

        return () => {
            if (modelSectionRef.current) {
                observer.unobserve(modelSectionRef.current);
            }
        };
    }, []);

    // Typing animation effect
    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[loopNum % phrases.length];
            const speed = isDeleting ? 100 : typingSpeed;

            if (!isDeleting && displayText === currentPhrase) {
                // Start deleting after pause
                setTimeout(() => setIsDeleting(true), 1500);
                return;
            } else if (isDeleting && displayText === "") {
                // Move to next phrase
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                // Pause before typing next phrase
                setTimeout(() => { }, 500);
                return;
            }

            // Update display text
            setDisplayText(prev => {
                if (isDeleting) {
                    return prev.substring(0, prev.length - 1);
                } else {
                    return currentPhrase.substring(0, prev.length + 1);
                }
            });
        };

        const timer = setTimeout(handleTyping, isDeleting ? 75 : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, phrases]);

    const scrollToModel = () => {
        modelSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Text animation for the running text
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    return (
        <section className="h-1/2 md:h-screen lg:h-[75vh]  w-full flex flex-col justify-center items-center">

            <div className="w-full h-full flex flex-col md:flex-row items-center  justify-center p-4 md:p-8">
                {/* Left Side - Portfolio Text */}
                <div className="md:w-1/2 lg:w-2/3 h-full flex flex-col justify-center  items-center md:items-start md:pl-5 lg:pl-10 z-10 mb-10 md:mb-0">


                    {/* Typing Text Animation */}
                    <motion.div
                        className="overflow-hidden"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="flex items-center mb-6 select-none">
                            <span className="text-xl md:text-xl lg:text-5xl text-foreground/90 mr-2">Hey, I am a</span>
                            <span className="text-xl md:text-xl lg:text-5xl text-accent font-semibold h-8 inline-flex items-center select-none">
                                {displayText}
                                <span className="w-1 h-6 lg:h-9 bg-accent ml-1 animate-blink"></span>
                            </span>
                        </div>
                    </motion.div>

                    <p className="text-base md:text-lg lg:text-2xl text-foreground/70 max-w-[80%] text-center md:text-start mb-8 select-none">
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.
                    </p>

                    {/* Link */}
                    <Link href="mailto:atulkesharwani7307@gmail.com" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Hire me</Link>
                </div>


                {/* Right Side - Photo */}
                <div className="md:w-1/2 lg:w-1/3 h-full md: flex justify-center items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/50"
                    >

                        <Image
                            src={at}
                            alt="Developer Profile"
                            fill
                            sizes="full"
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>

    );
}