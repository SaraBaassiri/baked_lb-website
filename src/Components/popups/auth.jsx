import "./auth.css";
import React, { Component } from 'react';


class Auth extends Component {
    state = {  }
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "#E0D2F5",
                    // width: "auto",
                    // height: "auto",
                    width: "690px",
                    height: "640px",
                    borderRadius: "69px",
                    border: "1px solid black",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    // alignItems: "center",
                    position: "fixed"          
                }}
            >
                <div>
                    <div className="everything">
                        <h1 className="titleR">REGISTER</h1>
                        <div className="titleRline"></div>
                        <p className="cout2">Register to have the earliest discounts, and latest products</p>

                        <div className="grid-container1">
                            <div className="grid-child">
                                <p className="label">First Name*</p>
                            </div>
                            <div className="grid-child">
                                <p className="label">Last Name*</p>
                            </div>
                        </div>

                        <div className="grid-containerb">
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="text"
                                        className="inputbox2"
                                        name="firstname"
                                        placeholder="First Name"
                                    />
                                </label>
                            </div>
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="text"
                                        className="inputbox2"
                                        name="lastname"
                                        placeholder="Last Name"
                                    />
                                    </label>
                            </div>
                        </div>

                        <div className="grid-container1">
                            <div className="grid-child">
                                <p className="label">Phone Number*</p>
                            </div>
                            <div className="grid-child">
                                <p className="label">Email*</p>
                            </div>
                        </div>

                        <div className="grid-containerb">
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="text"
                                        className="inputbox2 short"
                                        name="phonenumber"
                                        placeholder="Phone Number"
                                    />
                                </label>
                            </div>
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="text"
                                        className="inputbox2long"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="grid-container1">
                            <div className="grid-child">
                                <p className="label">Password*</p>
                            </div>
                            <div className="grid-child">
                                <p className="label">Confirm Password*</p>
                            </div>
                        </div>

                        <div className="grid-containerb">
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="password"
                                        className="inputbox2"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </label>
                            </div>
                            <div className="grid-child">
                                <label>
                                    <input
                                        type="password"
                                        className="inputbox2long"
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                    />
                                </label>
                            </div>
                        </div>
                        <br />
                        <div className="check">
                            <label>
                                <input type="checkbox" />
                                Yes, I want to subscribe to get informed of any new products
                            </label>
                        </div>
                        <br />
                        <div className="check">
                        <label>
                            <input type="checkbox" />
                            I agree to all the <b>Terms, Privacy,</b> and <b>Fees</b>
                        </label>
                        </div>
                        <button className="createbtn">CREATE ACCOUNT</button>
                        <p className="login">Already have an account? <b>Login here</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;