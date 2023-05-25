import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Tabla from './Components/Tabla';
import FirebaseProvider from '../../Context/FirebaseContext';
import './FilterFligth.css';
import { app } from '../../../Settings/ConfigFirebase';

function FilterFligth(props) {
    const [showBuyComponent, setShowBuyComponent] = useState(false);
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);

    const handleSelect = () => {
        setSelectedRow({ origen, destino });
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
                <Button variant="primary" onClick={handleSelect}>
                    Buscar
                </Button>
            </Form>
            {showBuyComponent && (
                <FirebaseProvider>
                    <Tabla
                        app={app}
                        selected={selectedRow}
                        origen={origen}
                        destino={destino}
                    />
                </FirebaseProvider>
            )}
        </div>
    );
}

export default FilterFligth;