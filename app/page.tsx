import { CalendlyPopup } from "@/components/calendly/popup";
import HeroAbout from "@/components/main/about";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import HeroSection from "@/components/main/hero";
import HeroResults from "@/components/main/hero.results";
import HeroWho from "@/components/main/who";
import React from "react";
export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <HeroResults />
      <HeroAbout />
      <HeroWho />
      <Footer />
    </React.Fragment>
  );
}
