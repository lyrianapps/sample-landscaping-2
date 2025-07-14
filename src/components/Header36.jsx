"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 bg-[#0D291A] text-white"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-5xl font-normal md:mb-6 md:text-9xl lg:text-9xl xl:text-[6rem] leading-tight">
          Transform Your Outdoors into a Paradise
        </h1>
        <p className="md:text-md">
          At our Miami-based landscape company, we specialize in creating
          stunning outdoor spaces that reflect your style. Let us bring your
          vision to life with our expert design and maintenance services.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Button">Button</Button>
          <Button title="Button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
