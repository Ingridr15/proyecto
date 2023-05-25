import React, { useContext, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Buy from '../../BuyTickets/BuyTickets';
import { FirebaseContext } from '../../../Context/FirebaseContext';
import './Tabla.css';
import filter from '../FilterFligth.js';

function Tabla({ origen, destino, fecha }) {
    const { data } = useContext(FirebaseContext);
    const [showBuy, setShowBuy] = useState(false);

    const handleBuy = () => {
        setShowBuy(true);
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
                        {
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
                                            onClick={handleBuy}
                                        >
                                            Seleccionar
                                        </Button>
                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
            {showBuy && <Buy />}
        </div>
    );
}

export default Tabla;