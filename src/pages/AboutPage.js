import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";

function AboutPage() {
  return (
    <div>
      <div>
        <h2>About EatWise</h2>
        <h4>Our Values</h4>
        <p>
          We’re on a mission to help people make healthy and sustainable
          shopping decisions, and companies to become cleaner and more
          sustainable.
        </p>
        <h4>Help grow our platform</h4>
        <p>
          At EatWise, we’re building a world where people can easily find
          products that benefit their health and nurture the future of our
          planet. EatWise makes the long and complicated lists of product
          ingredients transparent and comprehendible, enabling people to shop
          better and live better. EatWise is a personal and easy-to-use shopping
          assistant for healthy and sustainable consumption. Through scanning
          the barcode of foods or cosmetics, the app displays a rating and
          product recommendations based on the latest scientific research and
          individual settings.
        </p>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
