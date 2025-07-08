"use client";

import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
  GraduationCap,
} from "lucide-react";
import React, { useState } from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import RippleLoader from "../Loader/RippleLoader";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    case "education":
      return <GraduationCap className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (newTab) {
      window.open(link, "_blank");
    } else {
      setLoading(true);
      router.push(link);
    }
  };

  const renderContent = (size) => (
    <>
      {loading ? (
        <RippleLoader />
      ) : (
        <motion.button
          onClick={handleClick}
          variants={item}
          className="text-foreground rounded-full flex items-center justify-center custom-bg"
          aria-label={label}
          name={label}
        >
          <span
            className={clsx(
              "relative group",
              size >= 480
                ? "w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause"
                : "w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4"
            )}
          >
            {getIcon(icon)}
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
            <span
              className={clsx(
                "absolute hidden peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                labelDirection === "left" ? "right-full left-auto" : "left-full"
              )}
            >
              {label}
            </span>
          </span>
        </motion.button>
      )}
    </>
  );

  return (
    <ResponsiveComponent>
      {({ size }) =>
        size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            {renderContent(size)}
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            {renderContent(size)}
          </div>
        )
      }
    </ResponsiveComponent>
  );
};

export default NavButton;