import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[300px] bg-gray-800 text-gray-100 mt-12 ">
      {/* Upper Section */}
      <section className="py-8 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Title or Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-orange-400 mb-2 mt-10">CodeChronicles
            </h2>
            <p className="text-sm text-gray-300">
              Building seamless web experiences with Next.js & modern tools.
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <SocialMedia />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-orange-400 mx-auto w-11/12"></div>

      {/* Lower Section */}
      <section className="py-4 px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Development Credits */}
        <div className="flex items-center gap-2 text-sm">
          <span>Developed with 💖 using:</span>
          <Link href="https://nextjs.org/" target="_blank">
            <Image src="/nextjs.svg" alt="Next.js" width={30} height={30} />
          </Link>
          <span>&</span>
          <Link href="https://sanity.io/" target="_blank">
            <Image src="/sanity.svg" alt="Sanity" width={30} height={30} />
          </Link>
        </div>

        {/* Footer Rights */}
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} <span className="font-bold">Code</span>
          <span className="font-bold text-orange-400">&nbsp;Chronicles</span>. All
          Rights Reserved.
        </p>
      </section>
    </footer>
  );
}
