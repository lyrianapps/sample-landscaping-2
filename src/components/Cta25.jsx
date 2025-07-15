import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Get Your Free Quote Today
        </h2>
        <p className="md:text-md">
          Contact us now to discover how our services can transform your outdoor
          space into a paradise.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button
            title="Quote"
            className="text-base font-semibold px-8 py-2 rounded-full bg-[#29834b] shadow-[0_4px_0_0_#20663a] text-white hover:bg-[#217346] transition min-w-[130px] border-none"
            style={{ boxShadow: "0 4px 0 0 #20663a" }}
          >
            Quote
          </Button>
          <Button
            title="Contact"
            variant="outline"
            className="text-base font-bold px-8 py-2 rounded-full border-2 border-[#d3d3d3] bg-white text-black shadow-[0_4px_0_0_#d3d3d3] hover:bg-[#f5f5f5] transition min-w-[130px]"
            style={{ boxShadow: "0 4px 0 0 #d3d3d3" }}
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
