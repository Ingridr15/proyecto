import './Logos.css';
import React, { Component } from 'react';
import imagen from '../../../../../../Images/Logo.png';

class Logos extends Component {
    render() {
        return (
            <div className="logos">
                <img className="Log" src={imagen} alt='' />
            </div>
        );
    }
}

export default Logos;