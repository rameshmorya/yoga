import React from "react";
import "./Header.css";
import { useStickyHeader } from "react-use-sticky-header";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [setHeaderRef] = useStickyHeader(50, {
    headerDetached: "header--detached-custom",
  });
  return (
    <>
      <div className="headerAddressBox">
        <div className="container">
          <div className="flexRowBox">
            <div className="cl6">
              <ul className="headerContactBox">
                <li>
                  <Link to="mailto:support@example.com">
                    <em className="icon-envelope"></em>support@example.com
                  </Link>
                </li>
                <li>
                  <Link to="tel:+91 9999 44 9981">
                    <em className="icon-phone-alt"></em>+91 9999 44 9981
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cl6">
              <ul className="headerSocialBox">
                <Link to=""></Link>
                <li>
                  <Link to="">
                    <em className="icon-facebook-f"></em>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <em className="icon-twitter"></em>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <em className="icon-instagram"></em>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <em className="icon-youtube"></em>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <em className="icon-linkedin-in"></em>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header ref={setHeaderRef}>
        <div className="headerContainer">
          <div className="container">
            <div className="headerFlexBox">
              <div className="logoBox">
                <Link to="">SATYOGA</Link>
              </div>
              <Navbar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
