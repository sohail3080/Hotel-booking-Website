import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us via email, phone, or visit our office.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope icon"></i>
              <span>Email: xyz@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone icon"></i>
              <span>Phone: +91 1234567890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt icon"></i>
              <span>Address: Liluah,Howrah,West Bengal</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
