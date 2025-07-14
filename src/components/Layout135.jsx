import React from "react";

export function Layout135() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#123722] text-white"
    >
      <div className="container max-w-3xl text-center">
        <h3
          className="text-5xl leading-[1.2] font-normal md:text-6xl lg:text-7xl mb-6"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          Our Journey: Crafting Beautiful
          <br />
          Landscapes Since 2002 in Miami
        </h3>
        <p
          className="mt-5 md:mt-6 text-lg md:text-xl font-bold"
          style={{ fontFamily: "var(--font-merriweather-sans), sans-serif" }}
        >
          Founded in 2002, our company has been dedicated to transforming
          outdoor spaces into stunning landscapes that reflect our clients'
          visions. Our mission is to provide exceptional service and quality,
          driven by our core values of integrity, creativity, and
          sustainability.
        </p>
      </div>
    </section>
  );
}
