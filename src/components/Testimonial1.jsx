"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#d3d3d3]"
    >
      <div className="container w-full max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <blockquote
            className="text-2xl md:text-3xl font-normal mb-8"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            "The team transformed my backyard into a paradise! Their attention
            to detail is unmatched."
          </blockquote>
          <div className="mt-2 flex flex-col items-center justify-center md:mt-4">
            <div className="mb-3 md:mb-4">
              <img
                src="https://ui-avatars.com/api/?name=Maria+Gonzalez&background=random"
                alt="Maria Gonzalez Avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-bold text-black">Maria Gonzalez</p>
            <p className="text-black font-semibold">Homeowner, Miami</p>
          </div>
        </div>
      </div>
    </section>
  );
}
