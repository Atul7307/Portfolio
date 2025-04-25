import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import HomeBtn from "@/components/HomeBtn";
import Sound from "@/components/Sound";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Portfolio Created with Three.js and Tailwind CSS | %s ",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS ",
  },
  description:
    "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <FireFliesBackground />
        <Sound />
        {children}
        <Footer /> 
        <div id="my-modal" />
      </body>
    </html>
  );
}