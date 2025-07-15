import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact3() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#ededee]"
    >
      <div className="container max-w-5xl">
        <div className="mx-0 mb-8 w-full max-w-none text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2
            className="mb-5 text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Get in Touch
          </h2>
          <p
            className="mb-8 text-lg font-bold md:text-xl"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            We’re here to answer your questions and assist you.
          </p>
        </div>
        <form className="mx-auto grid w-full max-w-xl grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2 text-left">
              Name
            </Label>
            <Input
              className="w-full rounded-lg border border-[#e0e0e0] bg-white"
              type="text"
              id="name"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2 text-left">
              Email
            </Label>
            <Input
              className="w-full rounded-lg border border-[#e0e0e0] bg-white"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 text-left">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto rounded-lg border border-[#e0e0e0] bg-white"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the Terms
            </Label>
          </div>
          <div className="flex justify-center">
            <Button
              title="Submit"
              className="text-lg font-semibold px-8 py-2 rounded-full bg-[#2E8B57] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[110px] border-none"
              style={{ boxShadow: "0 4px 0 0 #217346" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
