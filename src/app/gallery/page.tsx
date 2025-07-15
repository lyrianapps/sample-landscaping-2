import React from "react";
import { Navbar1 } from "@/components/Navbar1";
import { PortfolioHeader3 } from "@/components/PortfolioHeader3";
import { Gallery5 } from "@/components/Gallery5";
import { Layout12 } from "@/components/Layout12";

import { Cta13 } from "@/components/Cta13";
import { Footer4 } from "@/components/Footer4";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <PortfolioHeader3 />
      <Gallery5 />
      <Layout12 />

      <Cta13 />
      <Footer4 />
    </div>
  );
}
