
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className={" col-span-full  xl:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect
          </h2>
          <p className="font-light  text-wrap sm:text-sm md:text-base  text-justify ">
            My journey in web development is driven by a passion for building impactful digital experiences using modern, scalable technologies. With a strong foundation in JavaScript, I specialize in crafting dynamic user interfaces with React.js and developing full-stack applications using Node.js and Express.js.

            I work extensively with the MERN stack and have recently expanded my tech toolkit to include Next.js, TypeScript, Cloudinary, ShadCN UI, and Clerk for authentication—empowering me to deliver secure, responsive, and high-performance applications.

            Notable projects include:

            Imaginify – an AI-powered SaaS application for image transformation and enhancement, built with Next.js 15, TypeScript, MongoDB, Cloudinary, and Zod for schema validation.

            Malaria Tracking Website and Job Portal – full-stack platforms addressing real-world needs.

            SG Education and ISKCON Vijayawada – visually compelling front-end projects focused on user experience and accessibility.

            In addition to development, I serve as Vice President of SEIE, Webmaster of IEEE-RECS, and GDGOC Lead, where I lead technical initiatives and mentor aspiring developers.

            I am committed to continuous learning, clean code, and building applications that make a difference. Whether it’s through innovative projects or community leadership, I aim to create meaningful impact in the digital world—one line of code at a time
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <span className="font-semibold text-base">years of experience</span>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=atul7307&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Img"
            loading="lazy"
            width={500}
            height={500}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=atul7307&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Img"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  flex-wrap !p-0 !space-y-0"}>
          <img
            className="p-6 hidden md:block w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,react,redux,figma,git,github,mongodb,netlify,nodejs,npm,replit,tailwind,threejs,vercel,vite,appwrite,firebase,vscode,cpp,c,python,arduino,matlab&perline=7`}
            alt="Img"
            loading="lazy"
          />
          <img
            className="md:hidden w-full h-auto p-4"
            src={`https://skillicons.dev/icons?i=html,css,js,react,redux,figma,git,github,mongodb,netlify,nodejs,npm,replit,tailwind,threejs,vercel,vite,appwrite,firebase,vscode,cpp,c,python,arduino,matlab`}
            alt="Img"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=atul7307&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Img"
            loading="lazy"
          />
          
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/atul7307/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=atul7307&repo=Portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Img"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
