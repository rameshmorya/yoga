import React from "react";
import cover from "../../../../assets/images/coverpic.png";
import "../HeroSlider/HeroSlider.css";
import { Link } from "react-router-dom";

const Heroslider = () => {
  return (
    <>
      <div className="coverSlider">
        <div className="container">
          <div className="flexRowBox">
            <div className="cl6">
              <div className="coverBody">
                <h5>Welcome To Satyoga</h5>
                <h1>Join Yoga Personal</h1>
                <p>
                  {" "}
                  Yoga is the ability to focus the mind on a single point
                  without distraction.{" "}
                </p>
                <div className="coverBtnBox">
                  <Link to="/" className="btn btn-primary">
                    <span>Learn More</span>
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cl6">
              <div className="coverImg">
                <img src={cover} alt="" className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroslider;
