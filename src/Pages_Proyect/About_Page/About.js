import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Banner from '../Home_Page/Components/Banner/Banner';
import Footer from '../Home_Page/Components/Footer/Footer';

function About() {
    return (
        <div className="about">
            <Banner />
            <div className="about_text">
                <h1>¿Quiénes somos?</h1>
                <p>Somos una agencia de viajes que ofrece los mejores destinos turísticos a los mejores precios, con la mejor calidad y servicio.</p>
                <p>Contamos con una amplia gama de destinos en paises.</p>
                <p>SKYTRAVEL, siempre a tu sevicio.</p>
            </div>
            <Footer />
        </div>
    );
}


export default About;