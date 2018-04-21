import React, { Component } from 'react';
import Card from "./Card";
import "../styles/NextCard.css";

class CurrentCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="offset-sm-1 col-sm-1">
                    <i className="next-arrow fas fa-chevron-circle-left fa-3x"></i>
                </div>
                <Card offset="offset-sm-1"/>
                <div className="offset-sm-1 col-sm-1">
                    <i className="next-arrow fas fa-chevron-circle-right fa-3x"></i>
                </div>
            </div>
        )
    }
}

export default CurrentCard;