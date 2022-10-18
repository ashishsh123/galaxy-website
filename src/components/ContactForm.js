import React from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";
const ContactForm = () => {
  return (
    <div>
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Details</label>
        <textarea row="6" placeholder="Type a short message here" />
        <Link to="/" className="btn">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
