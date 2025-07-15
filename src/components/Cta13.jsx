"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1
            className="mb-5 text-[2rem] md:text-[2.2rem] lg:text-[3rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Transform Your Outdoor
            <br />
            Space Today
          </h1>
        </div>
        <div>
          <p
            className="md:text-md text-xl md:text-1xl lg:text-xl font-bold mb-5"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            Ready to elevate your landscape? Contact us today to discuss your
            vision and receive a personalized quote!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              title="Get Quote"
              className="text-base font-semibold px-8 py-2 rounded-full bg-[#29834b] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[140px] border-none"
              style={{ boxShadow: "0 4px 0 0 #217346" }}
            >
              Get Quote
            </Button>
            <Button
              title="Contact Us"
              className="text-base font-semibold px-8 py-2 rounded-full bg-white text-black shadow-[0_4px_0_0_#d6d6d6] hover:bg-[#f5f5f5] transition min-w-[140px] border border-[#d6d6d6]"
              style={{ boxShadow: "0 4px 0 0 #d6d6d6" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
