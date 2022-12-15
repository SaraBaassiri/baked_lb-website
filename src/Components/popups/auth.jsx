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
                    width: "590px",
                    height: "580px",
                    borderRadius: "69px",
                    borderWidth:"1px",
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
                <div className="everything">
                    <h1 className="titleR">REGISTER</h1>
                    <div className="Line"></div>
                    <p className="cout2">Contact the help team</p>
                
                </div>
            </div>
        );
    }
}

export default Auth;