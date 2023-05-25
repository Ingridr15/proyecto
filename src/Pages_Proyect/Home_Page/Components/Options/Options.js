import './Options.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Compra from '../../../../Images/Tickets.png';
import Status from '../../../../Images/Status.png';
import { Link } from 'react-router-dom';

function Options() {
    return (
        <div className="options">
            <Link to="/buy">
                <button className='boton' type="button" >Compra un vuelo <img src={Compra} alt=""
                    height="50" width="50" /> </button>
            </Link>
            <Link to="/status">
                <button className='boton' type="button" >Conoce el estatus de tu vuelo
                    <img src={Status} alt="" height="50" width="50" /></button>
            </Link>
        </div>
    );
}

export default Options;