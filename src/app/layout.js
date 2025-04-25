import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Footer from "@/components/Footer"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Atul`s Portfolio ",
    default:
      "Atul`s Portfolio",
  },
  icons: {
    icon: "/favicon.ico", 
  },
  description:
    "A unique creative portfolio designed by Atul with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
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