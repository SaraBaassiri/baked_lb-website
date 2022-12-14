import { borderRadius } from '@mui/system';
import React, { Component } from 'react';


class Auth extends Component {
    state = {  }
    render() {
        return (
            <div
            style={{
                position: "absolute",
                backgroundColor: "#E0D2F5",
                width: "1076px",
                height: "500px",
                borderRadius: "250px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed"                        
            }}
            >
                <h1>
                THANK YOU FOR ORDERING FROM BAKED
                </h1>
            </div>
        );
    }
}

export default Auth;