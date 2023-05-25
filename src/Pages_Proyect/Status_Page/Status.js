import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Home_Page/Components/Banner/Banner';
import React, { Component } from 'react';
import Footer from '../Home_Page/Components/Footer/Footer';
import './Status.css';
import { Form, Button } from 'react-bootstrap';

function Status() {
    return (
        <div className="status">
            <Banner />
            <Form className="FormStatus">
                <Form.Group className="mb-3" controlId="formGroupStatus">
                    <Form.Label>NÚMERO DE VUELO</Form.Label>
                    <Form.Control type="text" placeholder="Número de vuelo" />
                    <Form.Label>NOMBRE DEL COMPRADOR</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                    <Button variant="primary">Buscar</Button>
                </Form.Group>
            </Form>
            <Footer />
        </div>
    );
}


export default Status;