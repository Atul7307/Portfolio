'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import bg from '../../../../public/background/image.png';

export default function EducationExperience() {
  // State to track if we're running in the browser
  const [isBrowser, setIsBrowser] = useState(false);
  // State to hold our dynamically imported component
  const [ContentComponent, setContentComponent] = useState(null);

  useEffect(() => {
    // Mark that we're in the browser
    setIsBrowser(true);
    
    // Import the content component only in the browser
    import('./EducationExperienceContent').then(module => {
      setContentComponent(() => module.default);
    });
  }, []);

  return (
    <>
      {/* Background image - safe to render on server */}
      <Image
        src={bg}
        alt="background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />
      
      {/* Show loading state if content isn't loaded yet */}
      {!ContentComponent && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl text-accent font-bold">Loading education & experience...</div>
        </div>
      )}
      
      {/* Render the content component once we're in the browser and it's loaded */}
      {isBrowser && ContentComponent && <ContentComponent />}
    </>
  );
}