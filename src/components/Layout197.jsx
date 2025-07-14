"use client";

import React from "react";

export function Layout197() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3
              className="mb-5 text-4xl font-normal leading-tight md:mb-6 md:text-6xl lg:text-7xl xl:text-[3.5rem]"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Discover the Advantages of Choosing Our Expert Landscaping
              Services
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              Our team of experienced professionals is dedicated to transforming
              your outdoor space. We use only the highest quality materials to
              ensure lasting beauty and durability.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Expert Team
                </h6>
                <p>
                  With years of experience, we deliver exceptional landscaping
                  solutions tailored to your needs.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Quality Materials
                </h6>
                <p>
                  We source premium materials to create stunning landscapes that
                  stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
