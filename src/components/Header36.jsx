import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
          <Link href="tel:3068016781">
            <Button
              title="Button"
              className="text-lg font-semibold px-10 py-3 rounded-full bg-[#2E8B57] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition min-w-[140px] border-none"
              style={{ boxShadow: "0 4px 0 0 #217346" }}
            >
              Call
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          alt="Landscaping sample image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={"/assets/photo-2.avif"}
          width={1100}
          height={1100}
        />
      </div>
    </section>
  );
}
