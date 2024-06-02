import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="Aboutpage">
        <div className="Aboutustext">
          
          <div className="custom-intro-container">
            <h1 className="custom-intro-heading">Welcome to Wanderstayz</h1>
            <p className="custom-intro-text">
              Your go-to hotel booking website for the enchanting city of
              Kolkata! We are a group of six passionate students from MCKV
              Institute of Engineering, embarking on an exciting journey of
              frontend web development through an internship with IBM.
            </p>
            <p className="custom-intro-text">
              At Wanderstayz, we have poured our collective efforts into
              crafting a seamless and user-friendly experience for all
              travelers. Our website brings you a diverse selection of hotels,
              each catering to unique preferences, price ratings, and
              categories. Whether you seek luxury, budget-friendly stays, or
              something in between, we have something for every discerning
              traveler.
            </p>
            <p className="custom-intro-text">
              Using cutting-edge technologies such as React, JavaScript, HTML,
              and CSS, we have carefully crafted this platform to provide you
              with the best possible options for your stay in the vibrant city
              of Kolkata. It's been a collaborative effort, and we deeply
              appreciate the dedication and hard work of our entire team.
            </p>
            <p className="custom-intro-text">
              So, whether you are planning a leisurely vacation, a business
              trip, or a spontaneous adventure, Wanderstayz is here to help you
              find the perfect accommodation to make your journey unforgettable.
              Start exploring, and let us be your trusted companion in
              discovering the hidden gems of Kolkata!
            </p>
          </div>
          <div className="teampics container">
            <ul className="row p-0 m-0">
              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/Archismanpic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Archisman Das</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/Dipanjanpic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Dipanjan Nath</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/Sohailpic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Md Sohail</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="row p-0 m-0">
              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/Soumabhapic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Soumabha Biswas</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/Shibangipic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Shibangi Karmakar</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-md-4">
                <div className="member-container">
                  <img
                    src="Teampics/sayanpic.jpg"
                    alt="..."
                    className="gallery-image"
                  />
                  <div className="member-info">
                    <h6>Sayan Kumar Sadhukan</h6>
                    <p>
                      <i>
                        Student
                        <br />
                        MCKV Institute of Engineering
                      </i>
                      <br />
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
