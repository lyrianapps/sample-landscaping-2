import React from "react";

export function Header46() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28b bg-[#0D291A] text-white"
    >
      <div className="container">
        <div className="w-full max-w-lg">
          <h1
            className="mb-5 text-[4rem] md:text-[5rem] lg:text-[6rem] font-normal leading-tight"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Welcome to
            <br />
            GreenScape
          </h1>
          <p
            className="mt-8 text-xl font-bold md:text-2xl"
            style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
          >
            Your trusted partner in transforming outdoor spaces since 2002 in
            sunny Miami.
          </p>
        </div>
      </div>
    </section>
  );
}
