import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-4xl">
          <h2
            className="mb-8 text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Get Your Dream Landscape
            <br />
            Today
          </h2>
          <p
            className="mb-10 text-xl font-bold md:text-1xl"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            Contact us now to transform your outdoor space into a beautiful
            oasis tailored to you.
          </p>
          <div className="flex flex-wrap gap-8">
            <Button
              title="Quote"
              className="text-md font-semibold px-10 py-3 rounded-full bg-[#217346] shadow-[0_6px_0_0_#35543C] text-white hover:bg-[#17613a] transition min-w-[140px] border-none"
              style={{ boxShadow: "0 6px 0 0 #35543C" }}
            >
              Quote
            </Button>
            <Button
              title="Contact"
              variant="outline"
              className="text-md font-semibold px-10 py-3 rounded-full bg-white text-black border-2 border-[#d6d6ce] shadow-[0_6px_0_0_#d6d6ce] hover:bg-[#f5f5f0] transition min-w-[140px]"
              style={{ boxShadow: "0 6px 0 0 #d6d6ce" }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
