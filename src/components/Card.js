import React, { Component } from 'react';
import "../styles/Card.css";

class Card extends Component {
    render() {
        return (
            <div className={`card card-shadow col-sm-6 ${this.props.offset}`} >
                <div className="card-body">
                    <h3 className="card-title">Chinese Phrase</h3>
                    <h6 className="card-subtitle mb-2 text-muted">Phonetics</h6>
                    <p className="card-text">English Definition</p>
                    <p className="card-text">Potential Questions that this phrase could answer</p>
                    <p className="card-text">Phonetic breakdown</p>
                    <a href="#" className="card-link">Dictate</a>
                </div>
            </div>
        )
    }
}

export default Card;