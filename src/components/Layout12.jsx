import React from "react";

export function Layout12() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 text-white bg-[#13271b]"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1
              className="mb-5 text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-normal leading-tight"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Comprehensive Garden
              <br />
              Maintenance for a Lush, Vibrant
              <br />
              Outdoor Space
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our Garden Maintenance service ensures your landscape remains
              beautiful year-round. From regular upkeep to seasonal care, we
              handle every detail.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Regular Upkeep
                </h6>
                <p>
                  Keep your garden thriving with our scheduled maintenance and
                  expert care.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Seasonal Care
                </h6>
                <p>
                  Adapt your garden to changing seasons with our tailored care
                  solutions.
                </p>
              </div>
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
