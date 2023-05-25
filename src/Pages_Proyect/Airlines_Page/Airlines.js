import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Home_Page/Components/Banner/Banner';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Home_Page/Components/Footer/Footer';
import { Form, Button, Table } from 'react-bootstrap';
import { FirebaseContext } from '../Context/FirebaseContext2';
import { database } from '../../Settings/ConfigFirebase';
import { onValue, ref, off } from 'firebase/database';

const Airlines = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const databaseRef = ref(database, 'Aerolineas');

        onValue(databaseRef, (snapshot) => {
            const tableData = snapshot.val();
            const dataArray = tableData ? Object.values(tableData) : [];
            setData(dataArray); console.log(dataArray);
        });

        return () => {
            off(databaseRef);
        };
    }, []);

    return (
        <>
            <Banner />
            <div className="status">
                <Table className="tabla" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Link</th>
                            <th>Logo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p, index) => {
                            return (
                                <tr key={index}>
                                    <td>{p.nombre}</td>
                                    <td><a href={p.link}>{p.nombre}</a></td>
                                    <td><img src={p.logo} width={200}></img></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    );
}

export default Airlines;