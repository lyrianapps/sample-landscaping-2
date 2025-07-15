"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2
            className="mb-5 text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Get in Touch
          </h2>
          <p className="md:text-md">
            We’re here to answer your questions and assist you.
          </p>
        </div>
        <form className="mx-auto grid w-full max-w-md grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              className="w-full rounded-lg border border-[#d6d6d6] bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#29834b] transition"
              type="text"
              id="name"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              className="w-full rounded-lg border border-[#d6d6d6] bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#29834b] transition"
              type="email"
              id="email"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto rounded-lg border border-[#d6d6d6] bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#29834b] transition"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox
              id="terms"
              className="w-5 h-5 border-2 border-[#d6d6d6] rounded focus:ring-2 focus:ring-[#29834b] transition"
            />
            <Label htmlFor="terms" className="cursor-pointer font-semibold">
              I accept the Terms
            </Label>
          </div>
          <div className="text-center">
            <Button
              title="Submit"
              className="text-base font-semibold px-8 py-2 rounded-full bg-[#29834b] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[130px] border-none"
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
