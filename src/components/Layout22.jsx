"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { GiGrass } from "react-icons/gi"; // Add this import

export function Layout22() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#123722] text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <GiGrass size={80} />
            </div>
            <h2
              className="rb-5 mb-5 text-4xl font-normal md:mb-6 md:text-7xl lg:text-8xl xl:text-[4.5rem] leading-tight"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Our Journey: Crafting Beautiful Landscapes Since 2002
            </h2>
            <p className="md:text-md">
              Founded in the vibrant city of Miami in 2002, our company has
              dedicated itself to transforming outdoor spaces into stunning
              landscapes. Our mission is to enhance the beauty of your
              surroundings while upholding values of quality, sustainability,
              and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Contact
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
