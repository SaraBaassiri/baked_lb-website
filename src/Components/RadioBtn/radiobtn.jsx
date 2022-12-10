import { width } from '@mui/system';
import React, { Component } from 'react'


class Radio extends Component {
    state = {  

        clicked: false
    }
    render() {
        return (
            <div>
                <div style={{
                    height: "21px",
                    width: "21px",
                    borderRadius: "50%",
                    border: "2px solid #E0D2F5",
                    backgroundColor: this.state.clicked ? "#E0D2F5" : "#fff",
                }}
                onClick= {
                    () => {
                        this.setState({clicked: !this.state.clicked})
                    }
                }
                >
                </div>
            </div>
        );
    }
}

export default Radio;