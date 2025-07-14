"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  const pathname = usePathname();

  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-border-primary lg:min-h-18 lg:px-[5%] bg-[#0D291A]"
    >
      <div className="w-full lg:flex lg:items-center lg:justify-between text-white py-4 px-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link
            href="/"
            className="text-3xl font-serif italic font-normal tracking-wide select-none"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Sample Landscaping
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            {/* ...hamburger icon code... */}
          </button>
        </div>
        <motion.div className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]">
          <Link
            href="about-us"
            className={`block py-3 text-sm lg:px-4 lg:py-2 lg:text-base ${
              pathname === "/about-us" ? "text-[#2E8B57] font-semibold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="services"
            className={`block py-3 text-sm lg:px-4 lg:py-2 lg:text-base ${
              pathname === "/services" ? "text-[#2E8B57] font-semibold" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="gallery"
            className={`block py-3 text-sm lg:px-4 lg:py-2 lg:text-base ${
              pathname === "/gallery" ? "text-[#2E8B57] font-semibold" : ""
            }`}
          >
            Gallery
          </Link>

          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-8 lg:flex-row">
            <Button
              title="Quote"
              variant="outline"
              size="lg"
              className="w-full font-sans text-base font-normal px-6 py-2 rounded-full border-2 border-[#35543C] bg-transparent text-white hover:bg-[#1a3a25] transition"
            >
              Quote
            </Button>
            <Button
              title="Learn More"
              size="lg"
              className="w-full font-sans text-base font-semibold px-6 py-2 rounded-full bg-[#2E8B57] shadow-[0_4px_0_0_#217346] text-white hover:bg-[#217346] transition"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
