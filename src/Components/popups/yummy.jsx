import { borderRadius } from '@mui/system';
import React, { Component } from 'react';


class Yummy extends Component {
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
                top: "43%",
                right: "32%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1"
            }}
            >
               <h1>
               THANK YOU FOR ORDERING FROM BAKED
               </h1>
               <p style={{
                fontSize: "26px"
               }} >Order will be delivered in 1 day!</p>
               <button
               style={{
                backgroundColor:"#FFF9DE",
                width: "385px",
                height: "74px",
                fontSize: "27px"
               }}

               onClick={
                (e)=>{
                window.location.href = "/"
                }
               }
               >
               Yummy in my Tummy
               </button>
            </div>
        );
    }
}

export default Yummy;