import { Badge } from "@relume_io/relume-ui";
import Image from "next/image";
import React from "react";

export function PortfolioHeader3() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#13271b] text-white"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1
            className="mb-5 text-[3.2rem] md:text-[6rem] lg:text-[5rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Stunning Landscape
            <br />
            Designs
          </h1>
          <p
            className="md:text-md text-xl md:text-2xl lg:text-3xl font-normal mb-5"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            Explore our exquisite gallery showcasing the beauty and creativity
            <br className="hidden md:block" />
            of our landscape projects.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <span className="inline-block px-7 py-2 rounded-full border border-white/20 text-white text-xl font-bold bg-transparent transition-all">
              Garden Design
            </span>
            <span className="inline-block px-7 py-2 rounded-full border border-white/20 text-white text-xl font-bold bg-transparent transition-all">
              Outdoor Living
            </span>
            <span className="inline-block px-7 py-2 rounded-full border border-white/20 text-white text-xl font-bold bg-transparent transition-all">
              Commercial Spaces
            </span>
          </div>
        </div>
        <div>
          <Image
            width={1200}
            height={800}
            src="/assets/photo-14.avif"
            alt="Relume placeholder image 1"
            className="w-full rounded-image"
          />
        </div>
      </div>
    </section>
  );
}
