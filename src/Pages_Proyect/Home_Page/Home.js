import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buy from '../Buy_Page/Buy';
import Banner from './Components/Banner/Banner';
import Options from './Components/Options/Options';
import Footer from './Components/Footer/Footer';
import About from './../../Pages_Proyect/About_Page/About';
import Status from './../../Pages_Proyect/Status_Page/Status';
import Info from './../../Pages_Proyect/Info_Page/Info';
import Airlines from './../../Pages_Proyect/Airlines_Page/Airlines';

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/about" element={<About />} />
        <Route path="/status" element={<Status />} />
        <Route path="/info" element={<Info />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return (
    <div className="home">
      <Banner />
      <Options />
      <Footer />
    </div >
  );
}

export default Home;