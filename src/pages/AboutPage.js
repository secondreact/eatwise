import React from "react";
import "../Components/AboutPage/AboutPage.scss";
import ContactForm from "../Components/AboutPage/ContactForm";
import Footer from "../Components/Footer/Footer";
import AboutPageImage from "../pages/shared/general_images/eating_salad_.svg";

function AboutPage() {
  return (
    <div>
      <h2>About EatWise</h2>
      <div className="about-section">
        <div>
          <img src={AboutPageImage} alt="Woman eating a salad" />
        </div>
        <div className="about-content">
          <h4>Our Values</h4>
          <p>
            Our mission is to help people make safe and healthy food choices and
            provide transparent and easy to read information for consumers.
          </p>
          <h4>Help grow our platform</h4>
          <p>
            At EatWise we’re building a world where people can easily find
            products that benefit their health and nurture the future of our
            planet. We make the long and complicated lists of product
            ingredients transparent and comprehendible, enabling people to shop
            better and live better. EatWise is a personal and easy-to-use
            shopping assistant for healthy and sustainable consumption. Through
            scanning the barcode of foods or cosmetics, the app displays a
            rating and product recommendations based on the latest scientific
            research and individual settings.
          </p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AboutPage;
