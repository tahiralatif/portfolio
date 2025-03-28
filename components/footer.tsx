"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent backdrop-blur-md py-10 mt-[100px]">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mt-6 h-[1px] w-full max-w-4xl bg-gray-300 dark:bg-gray-700"></div>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white pt-10">
          Tahira Rajput
        </h2>
        <p className="mt-2 max-w-lg text-gray-600 dark:text-gray-400 text-sm">
          Next.js Developer | Crafting modern and scalable web solutions.
        </p>

        <div className="mt-4 flex gap-6">
          <Link
            href="https://www.linkedin.com/in/tahira-rajput-983aa82b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all hover:text-blue-600 dark:text-gray-300"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
                href="https://github.com/tahiralatif" 
           
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all hover:text-gray-800 dark:text-gray-300"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all hover:text-blue-400 dark:text-gray-300"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61561036515275"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all hover:text-blue-700 dark:text-gray-300"
          >
            <FaFacebook size={24} />
          </Link>
        </div>

        <div className="mt-6 h-[1px] w-full max-w-4xl bg-gray-300 dark:bg-gray-700"></div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Tahira Rajput. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
