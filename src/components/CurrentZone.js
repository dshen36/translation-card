import React, { Component } from 'react';
import CurrentCard from './CurrentCard';

import "../styles/NextCard.css";

class CurrentZone extends Component {
    render() {
        return (
            <div className="row">
                <div className="offset-sm-1 col-sm-1">
                    <i className="next-arrow fas fa-chevron-circle-left fa-3x"></i>
                </div>
                <div className={"col-sm-6 offset-sm-1"}>
                    <CurrentCard/>
                </div>
                
                <div className="offset-sm-1 col-sm-1">
                    <i className="next-arrow fas fa-chevron-circle-right fa-3x"></i>
                </div>
            </div>
        )
    }
}

export default CurrentZone;