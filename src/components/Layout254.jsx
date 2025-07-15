import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout254() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#123722] text-white"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h2
              className="mb-5 text-[2.3rem] md:text-[3rem] lg:text-[3.5rem] font-normal leading-tight"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Exceptional Landscaping Services
              <br />
              Tailored for You
            </h2>
            <p className="md:text-md">
              Our team specializes in creating stunning outdoor spaces that
              enhance your property. From design to maintenance, we ensure your
              landscape thrives.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Landscaping Services
              </h3>
              <p>
                Expert landscaping solutions to elevate your outdoor environment
                and increase your property's curb appeal.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Garden Maintenance
              </h3>
              <p>
                Comprehensive garden care to keep your plants healthy and your
                outdoor space looking pristine.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Custom Garden Designs
              </h3>
              <p>
                Tailored garden designs that reflect your style and enhance the
                beauty of your property.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Get Started Today
              </h3>
              <p>
                Contact us to discuss your landscaping needs and receive a
                personalized quote for your project.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button
            className="text-base font-semibold px-8 py-2 rounded-full bg-[#2E8B57] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[120px] border-none"
            style={{ boxShadow: "0 4px 0 0 #217346" }}
          >
            Learn More
          </Button>
          <Button
            iconRight={<RxChevronRight />}
            variant="outline"
            className="text-base font-semibold px-8 py-2 rounded-full border-2 border-[#35543C] bg-transparent text-white hover:bg-[#1a3a25] transition min-w-[120px]"
            style={{ boxShadow: "0 4px 0 0 #35543C" }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
