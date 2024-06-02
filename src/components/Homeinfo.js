import React, { useState } from "react";
import "./Homeinfo.css";
import datainfo2 from "./data2";

const Homeinfo = () => {
  const [data1, setItems] = useState(datainfo2);

  const filterItem = (cateItem) => {
    const updatedItems = datainfo2.filter((currElem) => {
      if (cateItem === "All") {
        return currElem;
      } else {
        return currElem.category === cateItem;
      }
    });
    setItems(updatedItems);
  };

  return (
    <div className="Homeinfo_component">
      <h1>TYPES</h1>
      <div className="Homeinfo_category">
        <div className="all">
          <h6 onClick={() => filterItem("All")}>
            <button>All</button>
          </h6>
        </div>
        <div className="Luxury Hotels">
          <h6 onClick={() => filterItem("Luxury Hotels")}>
            <button>Luxury Hotels</button>
          </h6>
        </div>
        <div className="Hostels">
          <h6 onClick={() => filterItem("Hostels")}>
            <button>Hostels</button>
          </h6>
        </div>
        <div className="Boutique Hotels">
          <h6 onClick={() => filterItem("Boutique Hotels")}>
            <button>Boutique Hotels</button>
          </h6>
        </div>
        <div className="Business Hotels">
          <h6 onClick={() => filterItem("Business Hotels")}>
            <button>Business Hotels</button>
          </h6>
        </div>
        <div className="Resort Hotels">
          <h6 onClick={() => filterItem("Resort Hotels")}>
            <button>Resort Hotels</button>
          </h6>
        </div>
        <div className="Budget Hotels">
          <h6 onClick={() => filterItem("Budget Hotels")}>
            <button>Budget Hotels</button>
          </h6>
        </div>
        <div className="Airport Hotels">
          <h6 onClick={() => filterItem("Airport Hotels")}>
            <button>Airport Hotels</button>
          </h6>
        </div>
      </div>

      <div className="Homeinfo">
        {data1.map((elem1) => {
          const { img, name, location, price, category } = elem1;
          return (
            <div className="Homeinfo_items" key={name}>
              <div className="Homeinfo_wrapper">
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
    </div>
  );
};

export default Homeinfo;
