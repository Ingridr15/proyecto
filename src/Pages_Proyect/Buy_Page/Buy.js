import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Home_Page/Components/Banner/Banner';
import React, { Component } from 'react';
import FilterFligth from './FilterFligth/FilterFligth';
import Footer from '../Home_Page/Components/Footer/Footer';

function Buy() {
    return (
        <div className="buy">
            <Banner />
            <FilterFligth />
            <Footer />
        </div>
    );
}


export default Buy;