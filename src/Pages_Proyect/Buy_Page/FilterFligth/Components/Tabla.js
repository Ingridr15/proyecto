import React, { useContext, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Buy from '../../BuyTickets/BuyTickets';
import { FirebaseContext } from '../../../Context/FirebaseContext';
import './Tabla.css';
import filter from '../FilterFligth.js';
import { app } from '../../../../Settings/ConfigFirebase';

function Tabla(props) {
    const { origen, fecha, destino, data } = useContext(FirebaseContext);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleBuy = (flight) => {
        setSelectedFlight(flight);
    };

    return (
        <div className="tabla">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Número de vuelo</th>
                        <th>Fecha</th>
                        <th>Origen</th>
                        <th>Hora de origen</th>
                        <th>Destino</th>
                        <th>Hora de destino</th>
                        <th>Aerolínea</th>
                        <th>Costo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((p, index) => {

                        if (p.origen === props.origen && p.destino === props.destino) {
                            return (
                                <tr key={index}>
                                    <td>{p.noVuelo}</td>
                                    <td>{p.fecha}</td>
                                    <td>{p.origen}</td>
                                    <td>{p.horaOrigen}</td>
                                    <td>{p.destino}</td>
                                    <td>{p.horaDestino}</td>
                                    <td>{p.aerolinea}</td>
                                    <td>{p.costo}</td>
                                    <td>
                                        <Button
                                            variant="success"
                                            onClick={() => handleBuy(p)}
                                        >
                                            Seleccionar
                                        </Button>
                                    </td>
                                </tr>
                            );
                        } else {
                            console.log(`${props.fecha.toString()} ${p.fecha.toString()}`);
                            return null;
                        }
                    })}
                </tbody>
            </Table>
            {selectedFlight && <Buy flight={selectedFlight} />}
        </div>
    );
}

export default Tabla;