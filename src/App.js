import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Components/Header';
import Logos from './Components/Logo';
import Slogan from './Components/Slogan';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Datos from './Components/CompraVuelo/DatosVuelo';
import DatosCompletos from './Components/CompraVuelo/DatosCompletos';

function App() {
  return (
    <div className="App">
      <Header />
      <Logos />
      <Slogan />
      <Body />
      <Footer />
      <h4>------ ESPACIO AL HACER CLICK EN COMPRA UN VUELO ------------</h4>
      <Header />
      <Logos />
      <Slogan />
      <Datos />
      <DatosCompletos />
      <Footer />
      <h4>------ ESPACIO AL HACER CLICK EN CONSULTA DETALLES DE TU VUELO ------------</h4>
      <Header />
      <Logos />
      <Slogan />
      {/*<h4>------ ESPACIO AL HACER CLICK EN AEROLINEAS ------------</h4>
      <h4>------ ESPACIO AL HACER CLICK EN ACERCA DE ------------</h4> */}
    </div>
  );
}

export default App;