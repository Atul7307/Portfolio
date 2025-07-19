import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Footer from "@/components/Footer";
import HomeBtn from "@/components/HomeBtn";

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
    shortcut: "/favicon.ico",
  },
  description:
    "A unique creative portfolio designed by Atul with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2932539371789323"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <FireFliesBackground />
        <HomeBtn />
        <Sound />
        {children}
        <Footer />
        <div id="my-modal" />
      </body>
    </html>
  );
}
