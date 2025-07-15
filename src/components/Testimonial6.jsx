import React from "react";
import { FaStar } from "react-icons/fa";

export function Testimonial6() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e9e8d3]"
    >
      <div className="container max-w-7xl mx-auto">
        <h2
          className="mb-8 text-5xl font-normal text-left"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          Customer Testimonials
        </h2>
        <p className="mb-10 text-lg font-bold text-left">
          Transforming my yard into a paradise!
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex mb-4 text-black">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "The team was professional and exceeded my expectations!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Emily Johnson"
                className="size-12 min-w-12 min-h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="font-bold">Emily Johnson</p>
                <p className="text-sm">Homeowner, Miami</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6"
            />
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex mb-4 text-black">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "Their attention to detail is unmatched!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Michael Smith"
                className="size-12 min-w-12 min-h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="font-bold">Michael Smith</p>
                <p className="text-sm">Manager, GreenScape</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6"
            />
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex mb-4 text-black">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "I highly recommend their services to everyone!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Sarah Lee"
                className="size-12 min-w-12 min-h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="font-bold">Sarah Lee</p>
                <p className="text-sm">Director, Oasis</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
