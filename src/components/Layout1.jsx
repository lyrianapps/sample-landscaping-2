import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h1
              className="mb-5 text-[5rem] md:text-[2.5rem] lg:text-[3.4rem] font-normal leading-tight"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Comprehensive
              <br />
              Landscaping Solutions for
              <br />
              Your Space
            </h1>
            <p className="md:text-md">
              Our landscaping services encompass design, installation, and
              ongoing maintenance to create and sustain beautiful outdoor
              environments. Whether you're looking to enhance your garden or
              install a new patio, we have the expertise to bring your vision to
              life.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Learn More"
                className="text-base font-semibold px-8 py-2 rounded-full border-2 border-[#e5e5e5] bg-white text-black shadow-none hover:bg-[#f5f5f5] transition min-w-[130px]"
                style={{ borderColor: "#e5e5e5" }}
              >
                Learn More
              </Button>
              <Button
                title="Get Quote"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="text-base font-bold px-4 py-2 text-black hover:underline"
                style={{ boxShadow: "none" }}
              >
                Get Quote
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
