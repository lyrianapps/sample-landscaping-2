"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight, RxHome } from "react-icons/rx";
import { GiGrass, GiAbstract017 } from "react-icons/gi"; // Add this import

export function Layout241() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28  bg-[#0D291A] text-white"
    >
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Transform</p>
              <h2
                className="mb-5 text-4xl font-normal md:mb-6 md:text-7xl lg:text-8xl xl:text-[4.5rem] leading-tight"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                Your Outdoor Space into a Paradise
              </h2>
              <p className="md:text-md">
                Our expert team specializes in creating stunning landscapes that
                enhance the beauty of your property. From lush gardens to
                elegant hardscapes, we bring your vision to life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <GiGrass size={80} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Comprehensive Landscaping Services Tailored for You
              </h3>
              <p>We offer a full range of landscaping solutions.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RxHome size={80} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expert Garden Maintenance for Lasting Beauty
              </h3>
              <p>Keep your garden thriving with our maintenance services.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <GiAbstract017 size={80} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Custom Garden Designs to Suit Your Style
              </h3>
              <p>Let us design a garden that reflects your personality.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button
              variant="outline"
              size="lg"
              className="font-sans text-base font-normal px-8 py-2 rounded-full border-2 border-[#35543C] bg-transparent text-white hover:bg-[#1a3a25] transition min-w-[150px]"
            >
              Learn More
            </Button>
            <Button
              iconRight={<RxChevronRight />}
              variant="link"
              size="lg"
              className="font-sans text-base font-normal px-2 py-2 rounded-full text-white hover:underline transition"
            >
              Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
