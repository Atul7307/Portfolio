import Image from "next/image";
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import bg from '../../public/background/footer.webp';
import logo from '../../public/background/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-gray-300 z-50"

    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      ></div>


      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between mb-8 items-center text-center md:items-start">

          {/* Logo section */}
          <div className="w-full md:w-[25%] mb-6 md:mb-0">
            <div className="w-full">

              <Image
                src={logo}
                alt="image"
                placeholder="blur"
                loading="lazy"
                quality={75}
                
              />
            </div>

          </div>

          {/* Quick links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>

              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <Link href="mailto:atulkesharwani7307@gmail.com">atulkesharwnai7307@gmail.com</Link>
              <p>PrayagRaj, U.P.</p>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Atul7307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-kesharwani-7307-atk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Atulk_08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:atulkesharwani7307@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-6"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {currentYear} Atul Kesharwani. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <Link href="/" className="mr-4 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;