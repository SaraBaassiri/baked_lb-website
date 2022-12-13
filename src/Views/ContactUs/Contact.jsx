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
            {/* <form>
              <label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/></label>
              <label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/></label>
              <label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
              </label>
              <label>
              <input type="submit" value="Submit"/>
              </label>
            </form> */}

            {/* <form>
              <label>Enter your name:
                <input type="text" />
              </label>
            </form> */}

          </div>
      </div>

      <div className="grid-child rightside">
        <h1 className="title">Pay us a visit</h1>
        <div className="Line"></div>
        <iframe title="unilocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8210214007163!2d35.48150357545625!3d33.71357987328634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1e0d296bdb33%3A0x15bf12a3e6fb0e6!2sRafik%20Hariri%20University!5e0!3m2!1sen!2slb!4v1670901535223!5m2!1sen!2slb" 
        width="600" 
        className="map"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    </div>

  );
}
