import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Pricing" text="Choose your Trip." />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Pricing;
