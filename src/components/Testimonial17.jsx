import React from "react";
import { FaStar } from "react-icons/fa";

export function Testimonial17() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#F2F2F2]"
    >
      <div className="container max-w-7xl mx-auto">
        <h2
          className="mb-8 text-5xl font-normal text-center"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          Customer Testimonials
        </h2>
        <p className="mb-10 text-xl font-bold text-center">
          Transforming my yard into a paradise!
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4 text-[#2E8B57] justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-2xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "The team was professional and exceeded my expectations!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3 justify-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Emily Johnson"
                className="size-14 min-w-14 min-h-14 rounded-full object-cover border-2 border-white"
              />
              <div className="text-left">
                <p className="font-bold">Emily Johnson</p>
                <p className="text-sm">Homeowner, Miami</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6 mx-auto"
            />
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4 text-[#2E8B57] justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-2xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "Their attention to detail is unmatched!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3 justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Michael Smith"
                className="size-14 min-w-14 min-h-14 rounded-full object-cover border-2 border-white"
              />
              <div className="text-left">
                <p className="font-bold">Michael Smith</p>
                <p className="text-sm">Manager, GreenScape</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6 mx-auto"
            />
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-4 text-[#2E8B57] justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <blockquote
              className="mb-6 text-2xl font-normal"
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            >
              "I highly recommend their services to everyone!"
            </blockquote>
            <div className="flex items-center gap-3 mb-3 justify-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Sarah Lee"
                className="size-14 min-w-14 min-h-14 rounded-full object-cover border-2 border-white"
              />
              <div className="text-left">
                <p className="font-bold">Sarah Lee</p>
                <p className="text-sm">Director, Oasis</p>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="h-6 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
