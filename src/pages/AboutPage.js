import React from "react";
import "../Components/AboutPage/AboutPage.scss";
import ContactForm from "../Components/AboutPage/ContactForm";
import Footer from "../Components/Footer/Footer";
import AboutPageImage from "../pages/shared/general_images/eating_salad_.svg";

function AboutPage() {
  return (
    <div>
      <h2 className="page-header">About EatWise</h2>
      <div className="about-section">
        <div className="image-about">
          <img src={AboutPageImage} alt="Woman eating a salad" />
        </div>
        <div className="about-content">
          <h4>Our Mission</h4>
          <p>
            We’re on a mission to help people make healthy and sustainable
            shopping decisions, and companies to become cleaner and more
            sustainable.
          </p>
          <h4>Help grow our platform</h4>
          <p>
            At EatWise we care about transparency and better education on what
            we put in our table. Our goal is to serve all kinds of people, those
            have dietary restrictions can benefit the most with our filtered
            search and clear indicators of unsafe allergens. We want to make the
            long and complicated lists of product ingredients transparent and
            comprehendible, enabling people to shop better and live better.
            EatWise is a tool you can use while shopping or even to plan ahead
            from the comfort of your home.
          </p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AboutPage;
