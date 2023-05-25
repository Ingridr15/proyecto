import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Tabla from './Components/Tabla';
import FirebaseProvider from '../../Context/FirebaseContext';
import './FilterFligth.css';
import { app } from '../../../Settings/ConfigFirebase';

function FilterFligth() {
    const [showBuyComponent, setShowBuyComponent] = useState(false);
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);
    var origenString = '';
    var destinoString = '';
    var fechaString = '';

    const handleSelect = () => {
        origenString = origen.toString();
        destinoString = destino.toString();
        fechaString = fecha.toString();
        console.log(origenString);

        setShowBuyComponent(true);
    };

    return (
        <div className="filterFligth">
            <Form className="Formulario">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>O R I G E N</Form.Label>
                    <Form.Control
                        type="text"
                        value={origen}
                        onChange={(e) => setOrigen(e.target.value)}
                        placeholder="Lugar de origen"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>D E S T I N O</Form.Label>
                    <Form.Control
                        type="text"
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                        placeholder="Lugar de destino"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDate">
                    <Form.Label>F E C H A</Form.Label>
                    <Form.Control
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        placeholder="Fecha de viaje"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSelect}>
                    Buscar
                </Button>
            </Form>
            {showBuyComponent && (
                <FirebaseProvider>
                    <Tabla
                        app={app}
                        origen={origenString}
                        destino={destinoString}
                        fecha={fechaString}
                    />
                </FirebaseProvider>
            )}
        </div>
    );
}


export default FilterFligth;