import React from 'react';
import './BuyTickets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

function BuyTickets() {
    function buyClick() {
        Swal.fire('Mensaje de compra', '¡Compra realizada con éxito!', 'success');
    }

    return (
        <div className='buyTickets'>
            <Form className="FormsVuelo">
                <p> DATOS DEL VUELO </p>
                <Form.Control className="ctl" type="text" placeholder="VUELO: 296 " readOnly />
                <Form.Control className="ctl" type="text" placeholder="ORIGEN: Tijuana, B.C. México" readOnly />
                <Form.Control className="ctl" type="number" placeholder="HORA: 3:00 pm" readOnly />
                <Form.Control className="ctl" type="number" placeholder="DESTINO: Guadalajara, Jalisco " readOnly />
                <Form.Control className="ctl" type="number" placeholder="HORA: 7:00 pm" readOnly />
                <Form.Control className="ctl" type="text" placeholder="AEROLINEA: Volaris" readOnly />
                <Form.Control className="ctl" type="text" placeholder="COSTO: $ 2,500.00" readOnly />
            </Form>

            <Form className="FormsPersona">
                <p className='frmper'> DATOS PERSONALES </p>
                <Form.Control className="ctl" type="text" placeholder="Nombre completo" />
                <Form.Control className="ctl" type="text" placeholder="Correo electrónico" />
                <Form.Control className="ctl" type="number" placeholder="Teléfono / Celular" />
                <Form.Control className="ctl" type="number" placeholder="Cantidad de boletos" />
                <Form.Control
                    type="text"
                    placeholder="$ 0000.00"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                <Button className="btn" variant="success" onClick={buyClick}>Comprar</Button>
            </Form>
        </div>
    );
}

export default BuyTickets;