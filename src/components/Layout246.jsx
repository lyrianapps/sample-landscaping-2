import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaLeaf, FaSeedling, FaHandsHelping } from "react-icons/fa";
export function Layout246() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2
              className="text-5xl leading-[1.2] font-normal md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              Our Journey: Crafting Beautiful
              <br />
              Landscapes Since 2002 in Miami
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              At our company, we believe in creating outdoor spaces that inspire
              and rejuvenate. Our core values focus on sustainability,
              creativity, and customer satisfaction. We strive to exceed
              expectations with every project we undertake.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6 flex justify-center">
              <FaLeaf size={48} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Integrity and Transparency in Every Interaction with Our Clients
            </h3>
            <p>
              We prioritize open communication and honesty in all our dealings.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6 flex justify-center">
              <FaSeedling size={48} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Passion for Nature and Design in Every Project We Undertake
            </h3>
            <p>
              Our team is dedicated to blending natural beauty with innovative
              design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Discover
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6 flex justify-center">
              <FaHandsHelping size={48} />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Community Engagement and Responsibility Are at Our Core
            </h3>
            <p>
              We actively participate in local initiatives to support our
              community.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
