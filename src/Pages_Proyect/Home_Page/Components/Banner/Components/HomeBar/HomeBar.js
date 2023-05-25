import './HomeBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import imagen from '../../../../../../Images/Logo.png';
import { Link } from 'react-router-dom';


function HomeBar() {
    return (
        <div className="homebar">
            <Link to="/">
                <img className="imagen" src={imagen} alt='' />
            </Link>
            <div className="btns">
                <Link to="/airlines">
                <button className='botones' type="button">AEROLINEAS </button>
                </Link>
                <Link to="/about">
                    <button className='botones' type="button">ACERCA DE </button>
                </Link>
                <Link to="/info">
                    <button className='botones' type="button">MISIÓN, VISIÓN </button>
                </Link>
            </div>
        </div >
    );
}

export default HomeBar;