'use client';

import { educations } from "../../../components/Education/educations";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '@/app/assets/study.json';
import experience from '@/app/assets/code.json';
import AnimationLottie from "@/app/assets/animation";
import GlowCard from "@/app/assets/Glow-Card";
import {experiences} from "../../../components/Experience/experience";
import dynamic from 'next/dynamic';

// Dynamic imports with SSR disabled
const RenderModel = dynamic(() => import('@/components/RenderModel'), { 
  ssr: false,
  loading: () => null 
});

const Staff = dynamic(() => import('@/components/models/Staff'), { 
  ssr: false,
  loading: () => null 
});

export default function EducationExperienceContent() {
  return (
    <>
      <div id="education" className="w-full z-50">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-accent w-fit text-center text-[#1a1443] p-2 px-5 text-lg md:text-5xl font-extrabold rounded-lg">
              EDUCATIONS
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-3/4 h-3/4">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            <motion.div className="flex flex-col gap-6 hover:shadow-md justify-center">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="hidden md:block absolute h-full bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-accent">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-1 sm:px-3 py-5">
                      <div className="text-accent transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
                        <p className="text-sm sm:text-base font-semibold">CGPA: {education.CGPA}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div id="Experience" className="w-full z-50">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-accent w-fit text-center text-[#1a1443] p-2 px-5 text-lg md:text-5xl font-extrabold rounded-lg">
              Experiences
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-last md:order-first">
              <motion.div className="flex flex-col gap-6 hover:shadow-md">
                {experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute h-full bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center flex-col sm:flex-row gap-2 gap-x-8 sm:px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            <span>{experience.title} </span>
                            <span className="text-sm text-gray-400">({experience.location})</span>
                          </p>
                          <p className="text-sm sm:text-base font-semibold">{experience.role}</p>
                          <p className="text-sm sm:text-sm">{experience.description}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center items-start">
              <div className="w-full h-full">
                <AnimationLottie animationPath={experience} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Models */}
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-20 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
      <div className="hidden md:flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-20 right-1/2 lg:-right-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}