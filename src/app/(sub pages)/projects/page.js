import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <h1 className="text-accent text-4xl sm:text-5xl md:text-7xl  font-bold mb-5 ">Projects</h1>

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
