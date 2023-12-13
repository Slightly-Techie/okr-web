import Companies from "@/components/landing-page/Companies";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import OpenSource from "@/components/landing-page/OpenSource";
import Reviews from "@/components/landing-page/Reviews";
import React from "react";

function page() {
  return (
    <section>
      <Header />
      <Companies />
      <Features />
      <OpenSource />
      <Reviews />
      <Footer />
    </section>
  );
}

export default page;
