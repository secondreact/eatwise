import React from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="type your name here" />
        <label>Email:</label>
        <input type="email" placeholder="type your email here" />
        <label>Your message:</label>
        <textarea
          name="comment"
          id="1"
          placeholder="Enter your message here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
