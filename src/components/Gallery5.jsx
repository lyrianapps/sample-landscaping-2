"use client";

import Image from "next/image";
import React from "react";

const images = [
  "photo-9",
  "photo-8",
  "photo-10",
  "photo-11",
  "photo-12",
  "photo-13",
];

export function Gallery5() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#123722] text-white"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Project Showcase
          </h2>
          <p className="md:text-md">
            Explore our stunning landscaping transformations below.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => {
            // Generate a random height between 220px and 400px for demo
            const randomHeight = 520 + ((i * 73) % 180);
            return (
              <a
                href="#"
                key={i}
                className="block w-full mb-6 break-inside-avoid group"
              >
                <div className="overflow-hidden rounded-image">
                  <Image
                    style={{
                      display: "block",
                      height: `${randomHeight}px`,
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
                    }}
                    width={500}
                    height={randomHeight}
                    src={`/assets/${src}.avif`}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full mb-0 object-cover transform-gpu group-hover:scale-105"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
