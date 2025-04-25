import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import logo from '../../public/background/logo.png';

import dynamic from "next/dynamic";
import HomeClientComponent from "@/components/HomeClientComponent";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative pb-10 select-no">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="mb-5 md:mb-8  pt-4 md:pt-6 w-[35rem]">
        <Image src={logo} />
      </div>

      <section className="w-full">
        <HomeClientComponent />
      </section>

      <div className="w-full h-screen relative">
        <div className="absolute inset-0 z-10">
          <Navigation />
        </div>

        <div className="absolute inset-0">
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>
    </main>
  );
}