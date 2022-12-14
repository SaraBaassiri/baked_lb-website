import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="grid-container">
      <div className="grid-child leftside">
        <h1 className="title">Contact us</h1>
        <div className="Line"></div>
        {/* Form begins */}
        <p className="cout">Contact the help team</p>
        <div className="form">
          <form>
            <label>
              <input
                type="text"
                className="namebox leftbox inputbox"
                name="firstname"
                placeholder="First Name"
              />
            </label>
            <label>
              <input
                type="text"
                className="namebox rightbox inputbox"
                name="lastname"
                placeholder="Last Name"
              />
            </label>

            <label>
              <input
                type="text"
                className="emailbox inputbox"
                name="email"
                placeholder="Enter Your Email Address"
              />
            </label>

            <label>
              <textarea
                id="subject"
                name="subject"
                className="messagebox inputbox"
                placeholder="Message"
              ></textarea>
            </label>

            <button className="Subscribe">
              SUBSCRIBE NOW!
            </button>
          </form>

          {/* <form>
            <label>
              Enter your name:
              <input type="text" />
            </label>
          </form> */}
        </div>
      </div>

      <div className="grid-child rightside">
        <h1 className="title">Pay us a visit</h1>
        <div className="Line"></div>
        <iframe
          title="unilocation"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6435.436804113992!2d35.4907725218511!3d33.88953214358702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1671049697687!5m2!1sen!2slb"
          width="600"
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
