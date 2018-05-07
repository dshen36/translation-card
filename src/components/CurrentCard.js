import React, { Component } from 'react';
import Card from "./card/CardBody";
import CardFooter from "./card/CardFooter";
import "../styles/NextCard.css";

class CurrentCard extends Component {
    render() {
        return (
            <Card footer={<CardFooter/>}/>
        )
    }
}

export default CurrentCard;