import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#13271b] text-white"
    >
      <div className="container">
        <div className="w-full max-w-2xl">
          <p className="mb-3 font-semibold md:mb-4">Excellence</p>
          <h1
            className="mb-5 text-[4rem] md:text-[5rem] lg:text-[6rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Our Premium Services
          </h1>
          <p
            className="mb-8 w-2/4 text-base font-bold md:text-lg leading-snug"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            Transforming your outdoor spaces with unmatched quality and
            professional landscaping solutions tailored to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              title="Learn More"
              className="text-base font-semibold px-6 py-2 rounded-full bg-[#2E8B57] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[110px] border-none"
              style={{ boxShadow: "0 4px 0 0 #217346" }}
            >
              Learn More
            </Button>
            <Button
              title="Request"
              variant="outline"
              className="text-base font-semibold px-6 py-2 rounded-full border-2 border-[#35543C] bg-transparent text-white hover:bg-[#1a3a25] transition min-w-[110px]"
              style={{ boxShadow: "0 4px 0 0 #35543C" }}
            >
              Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
