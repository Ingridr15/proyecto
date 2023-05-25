import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Home_Page/Components/Banner/Banner';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Home_Page/Components/Footer/Footer';
import './Status.css';
import { Form, Button, Table } from 'react-bootstrap';
import { FirebaseContext } from '../Context/FirebaseContext2';
import { database } from '../../Settings/ConfigFirebase';
import { onValue, ref, off } from 'firebase/database';

const Status = (props) => {
    const [data, setData] = useState([]);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        const databaseRef = ref(database, 'Compras');

        onValue(databaseRef, (snapshot) => {
            const tableData = snapshot.val();
            const dataArray = tableData ? Object.values(tableData) : [];
            setData(dataArray); console.log(dataArray);
        });

        return () => {
            off(databaseRef);
        };
    }, []);

    const handleSearch = () => {
        const filteredData = data.filter(item => item.nombre === searchName);
        setData(filteredData);
    };

    return (
        <>
            <Banner />
            <div className="status">
                <Form className="Formulario">
                    <Form.Group className="mb-3" controlId="formGroupStatus">
                        <Form.Label>NOMBRE DEL COMPRADOR</Form.Label>
                        <Form.Control type="text" placeholder="Nombre completo" value={searchName} onChange={e => setSearchName(e.target.value)} />
                        <Button variant="primary" onClick={handleSearch}>Buscar</Button>
                    </Form.Group>
                </Form>

                <Table className="tabla" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Número de vuelo</th>
                            <th>Pasajero</th>
                            <th>Origen</th>
                            <th>Hora de origen</th>
                            <th>Destino</th>
                            <th>Hora de destino</th>
                            <th>Aerolínea</th>
                            <th>Costo total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p, index) => {
                            if (p.nombre === searchName) {
                                return (
                                    <tr key={index}>
                                        <td>{p.noVuelo}</td>
                                        <td>{p.nombre}</td>
                                        <td>{p.origen}</td>
                                        <td>{p.horaOrigen}</td>
                                        <td>{p.destino}</td>
                                        <td>{p.horaDestino}</td>
                                        <td>{p.aerolinea}</td>
                                        <td>{p.costo}</td>
                                    </tr>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
}

export default Status;