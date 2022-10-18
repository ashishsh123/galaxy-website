import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Contact" text="Contact GXL Travel" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
