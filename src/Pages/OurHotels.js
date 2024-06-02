import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "./OurHotels.css";
import datainfo from "../components/data";

const OurHotels = () => {
  const [data, setData] = useState(datainfo);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  // Wrap filterItems with useCallback and add its dependencies
  const filterItems = useCallback(() => {
    const filteredData = datainfo.filter((hotel) => {
      const matchType =
        selectedType === "All" || hotel.category === selectedType;
      const matchPrice =
        selectedPrice === "All" || hotel.price <= parseInt(selectedPrice);
      const matchRating =
        selectedRating === "All" || hotel.rating === selectedRating;
      return matchType && matchPrice && matchRating;
    });
    setData(filteredData);
  }, [selectedType, selectedPrice, selectedRating]);

  // Handle filtering based on type, price, and rating
  useEffect(() => {
    filterItems();
  }, [selectedType, selectedPrice, selectedRating, filterItems]);

  return (
    <div className="Ourhotels">
      <Navbar />
      <div className="topbar">
        <div className="container">
          <ul className="row justify-content-center">
            <li className="col-md-4">
              <div>
                <label>Type</label>
                <select
                  name="Category"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Luxury Hotels">Luxury Hotels</option>
                  <option value="Hostels">Hostels</option>
                  <option value="Boutique Hotels">Boutique Hotels</option>
                  <option value="Business Hotels">Business Hotels</option>
                  <option value="Resort Hotels">Resort Hotels</option>
                  <option value="Budget Hostels">Budget Hostels</option>
                  <option value="Airport Hostels">Airport Hostels</option>
                </select>
              </div>
            </li>
            <li className="col-md-4">
              <div>
                <label>Price</label>
                <select
                  name="Category"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="1000">&#8804;1000</option>
                  <option value="2000">&#8804;2000</option>
                  <option value="3000">&#8804;3000</option>
                  <option value="4000">&#8804;4000</option>
                  <option value="5000">&#8804;5000</option>
                  <option value="6000">&#8804;6000</option>
                  <option value="7000">&#8804;7000</option>
                  <option value="8000">&#8804;8000</option>
                  <option value="9000">&#8804;9000</option>
                  <option value="10000">&#8804;10000</option>
                  <option value="15000">&#8804;15000</option>
                  <option value="20000">&#8804;20000</option>
                </select>
              </div>
            </li>
            <li className="col-md-4">
              <div>
                <label>Rating</label>
                <select
                
                  name="Category"
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="5star">5 star</option>
                  <option value="4star">4 star</option>
                  <option value="3star">3 star</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="ourHotels_map">
        {data.map((elem1) => {
          const { img, name, location, price,category } = elem1;
          return (
            <div className="OurHotels_items col-md-3 pb-3 pt-3" key={name}>
              <div className="OutHotels_wrapper">
                <h4>{name}</h4>
                <img src={img} alt="..." className="image"></img>
                <div className="details">
                  <h1>
                    <em>{location}</em>
                  </h1>
                  <h4>{category}</h4>
                  <p>&#8377;{price}</p>
                </div>
                <button>BOOK NOW</button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default OurHotels;
