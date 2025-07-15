import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28  bg-[#0D291A] text-white"
    >
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Connect</p>
        <h1 className="mb-5 text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-normal leading-tight">
          Get in Touch
        </h1>
        <p className="md:text-md">
          We’re here to assist you with all your landscaping needs. Reach out
          today!
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button
            title="Learn More"
            className="text-base font-semibold px-8 py-2 rounded-full bg-[#23864b] shadow-[0_4px_0_0_#176636] text-white hover:bg-[#176636] transition min-w-[140px] border-none"
            style={{ boxShadow: "0 4px 0 0 #176636" }}
          >
            Learn More
          </Button>
          <Button
            title="Request"
            className="text-base font-semibold px-8 py-2 rounded-full border-2 border-[#176636] bg-transparent text-white hover:bg-[#176636] transition min-w-[140px]"
            style={{ boxShadow: "0 4px 0 0 #176636" }}
          >
            Request
          </Button>
        </div>
      </div>
    </section>
  );
}
