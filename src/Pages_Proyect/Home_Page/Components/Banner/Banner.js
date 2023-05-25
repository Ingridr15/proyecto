import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomeBar from './Components/HomeBar/HomeBar';
import Logos from './Components/Logos/Logos';
import Slogan from './Components/Slogan/Slogan';


function Banner() {
    return (
        <div className="banner">
            <HomeBar />
            <Logos />
            <Slogan />
        </div>
    );
}

export default Banner;