import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Homeinfo from "../components/Homeinfo";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home_cover_pic">
        <img src="Home/pic1.jpg" alt="..."></img>
        <div class="Home_cover">
          <h1>Welcome to Our Website</h1>
          <h6>Discover Your Dream Hotel</h6>
          <p>
            Are you planning a vacation or business trip and looking for the
            perfect hotel to stay? Look no further! Our website offers a wide
            selection of hotels to choose from, catering to every traveler's
            needs and preferences.
          </p>
          <NavLink to="/ourHotels">
            <button className="Home_cover_btn">BOOK NOW</button>
          </NavLink>
        </div>
      </div>
      <div className="intro-container">
        <h1>Welcome to WanderStayz</h1>
        <p className="intro-text">
          Your ultimate destination for hassle-free hotel searching and booking
          in Kolkata! Choose from Luxury Hotels, Hostels, Boutique Hotels,
          Business Hotels, Resort Hotels, Budget Hotels, and Airport Hotels.
        </p>
        <p className="intro-text">
          Indulge in opulence with Luxury Hotels, embrace adventure with
          Hostels, or enjoy personalized experiences in Boutique Hotels.
          Business Hotels cater to professionals, while Resort Hotels offer
          tranquil retreats. Budget Hotels provide affordability, and Airport
          Hotels ensure convenience.
        </p>
        <p className="intro-text">
          At WanderStayz, we make booking easy. Our user-friendly website
          provides comprehensive hotel information, including descriptions,
          photos, reviews, and amenities. Let us be your travel companion,
          ensuring an unforgettable stay in Kolkata!
        </p>
        <p className="intro-text">
          Experience the magic of Kolkata with WanderStayz - Where Your
          Wanderlust Finds a Perfect Stay!
        </p>
      </div>
      <div className="Home_homeinfo">
        <Homeinfo />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
