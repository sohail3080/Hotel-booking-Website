import React from "react";
import Navbar from "./Navbar"
import Footer from "../components/Footer";
import "./Login.css"
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="signup-page container-fluid row justify-content-center m-0 p-0">
        <div className="card col-md-4 col-11">
          <div>
            <h1>Welcome User</h1>
          </div>
          <div>
            <i className="circle-user fas fa-user-circle"></i>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text ">
                <i className="user-icon fas fa-user"></i>
              </span>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="  Username or Email Address"
            ></input>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text ">
                <i class="lock-icon fas fa-lock"></i>
              </span>
            </div>
            <input
              className="form-control"
              type="password"
              placeholder=" Password"
            ></input>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text ">
                <i class="lock-icon fas fa-lock"></i>
              </span>
            </div>
            <input
              className="form-control"
              type="password"
              placeholder=" Confirm Password"
            ></input>
          </div>
          <button className="signup-button ">LOGIN</button>
          <div className="row">
            <div className="col-6">
              <input type="checkbox"></input>Remember ME
            </div>
            <div className="col-6">
              <span>Forgot your password?</span>
            </div>
          </div>
          <div className="signup-bottom-icons row">
            <div className="col-4">
              <i className="fab fa-facebook"></i>
            </div>
            <div className="col-4">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="col-4">
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
