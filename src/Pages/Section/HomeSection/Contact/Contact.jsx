import React, { useState } from "react";
import "../Contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setFormData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.prevantDefault();
  };
  return (
    <>
      <div className="contactBox">
        <div className="headingBox">
          <div className="separator">
            <em className="icon-chakra"></em>
          </div>
          <h2>Make An Appointment</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className="container">
          <div className="flexRowBox">
            <div className="cl6">
              <div className="contactInfoBox">
                <div className="contactInfo">
                  <em className="icon-phone-alt"></em>
                  <div className="contactInfoBody">
                    <label>Phone no.</label>
                    <strong>+91 99999 99999</strong>
                  </div>
                </div>
                <div className="contactInfo">
                  <em className="icon-envelope"></em>
                  <div className="contactInfoBody">
                    <label>Email</label>
                    <strong>info@example.com</strong>
                  </div>
                </div>
                <div className="contactInfo">
                  <em className="icon-phone-alt"></em>
                  <div className="contactInfoBody">
                    <label>Address</label>
                    <strong>Sangam Vihar, New Delhi, Delhi</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="cl6">
              <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label htmlFor="formControlInput">Name</label>
                  <input
                    type="text"
                    id="formControlInput"
                    className="form-control"
                    name="fullname"
                    value={formData.fullname}
                    onChange={inputEvent}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formControlInput">Phone Number</label>
                  <input
                    type="number"
                    id="formControlInput"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={inputEvent}
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formControlInput">Email</label>
                  <input
                    type="text"
                    id="formControlInput"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={inputEvent}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formControlInputText">Message</label>
                  <textarea
                    id="formControlInputText"
                    className="form-control"
                    rows="3"
                    name="msg"
                    value={formData.msg}
                    onChange={inputEvent}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
