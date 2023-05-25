import React, { useContext, useState, useEffect } from 'react';
import './BuyTickets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table } from 'react-bootstrap';
import { FirebaseContext } from '../../Context/FirebaseContext';
import Swal from 'sweetalert2';
import { database } from '../../../Settings/ConfigFirebase';
import { onValue, ref, set, update } from 'firebase/database';

function BuyTickets(props) {

    const [pasajero, setPasajero] = useState({
        aerolinea: props.flight.aerolinea,
        cantidad: 0,
        costo: props.flight.costo,
        destino: props.flight.destino,
        horaDestino: props.flight.horaDestino,
        horaOrigen: props.flight.horaOrigen,
        noVuelo: props.flight.noVuelo,
        origen: props.flight.origen,
        nombre: "",
        correo: "",
        telefono: 0,
        boletos: 0
    });

    const [lista, setLista] = useState([]);

    const [desactivado, setDesactivado] = useState(false)

    useEffect(() => {
        let pasajerosLista = [];
        const dbRef = ref(database, 'Pasajeros');
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((row) => {
                pasajerosLista.push({
                    nombre: row.key,
                    correo: row.val().correo,
                    telefono: row.val().telefono,
                    boletos: row.val().boletos,
                    aerolinea: row.val().aerolinea,
                    cantidad: row.val().cantidad,
                    costo: row.val().costo,
                    destino: row.val().destino,
                    horaDestino: row.val().horaDestino,
                    horaOrigen: row.val().horaOrigen,
                    noVuelo: row.val().noVuelo,
                    origen: row.val().origen
                })
            })
        });
        setLista(pasajerosLista)
    }, {
        onlyOnce: true
    });


    const guardarCambios = (e) => {
        if (e.target.name === "boletos") {
            const cantidadBoletos = parseInt(e.target.value);
            const costoTotal = props.flight.costo * cantidadBoletos;

            setPasajero({
                ...pasajero,
                [e.target.name]: cantidadBoletos,
                costo: costoTotal
            });
        } else {
            setPasajero({
                ...pasajero,
                [e.target.name]: e.target.value
            });
        }
    };



    const eliminar = (nombre) => {
        set(ref(database, 'Compras/' + nombre), null)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {

            });

        const temporal = lista.filter(a => a.nombre !== nombre)

        setLista(temporal)
    }


    const enviar = (e) => {
        e.preventDefault();

        const { nombre, correo, telefono, boletos, aerolinea, cantidad, costo, destino, horaDestino, horaOrigen, noVuelo, origen } = pasajero;


        const vacios = (nombre.length === 0 || correo.length === 0 || telefono.length === 0 || boletos === 0)

        if (!vacios) {
            update(ref(database, 'Compras/' + nombre), pasajero)
                .then(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Pasajero agregado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })

            let temporal = lista;

            if (desactivado === true) {
                temporal = temporal.filter(a => a.nombre !== nombre)
            }

            setLista([...temporal, pasajero]);
            setPasajero({
                nombre: "",
                correo: "",
                telefono: "",
                boletos: "",
                aerolinea: "",
                cantidad: "",
                costo: "",
                destino: "",
                horaDestino: "",
                horaOrigen: "",
                noVuelo: "",
                origen: ""
            });
            setDesactivado(false)
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Llena todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
    }


    return (
        <div className='buyTickets'>
            <Form className="FormsVuelo">
                <p> DATOS DEL VUELO </p>
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.noVuelo} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.origen} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.horaOrigen} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.destino} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.horaDestino} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.aerolinea} readOnly />
                <Form.Control className="ctl" type="text" placeholder="" onChange={guardarCambios} value={props.flight.costo} readOnly />
            </Form>

            <Form className="FormsPersona">
                <p className='frmper'> DATOS PERSONALES </p>
                <Form.Control className="ctl" type="text" placeholder="Nombre completo" onChange={guardarCambios} value={pasajero.nombre} name='nombre' />
                <Form.Control className="ctl" type="text" placeholder="Correo electrónico" onChange={guardarCambios} value={pasajero.correo} name='correo' />
                <Form.Control className="ctl" type="number" placeholder="Teléfono / Celular" onChange={guardarCambios} value={pasajero.telefono} name='telefono' />
                <Form.Control className="ctl" type="number" placeholder="Cantidad de boletos" onChange={guardarCambios} value={pasajero.boletos} name='boletos' />
                <Form.Control onChange={guardarCambios} value={props.flight.costo * pasajero.boletos}
                    type="text"
                    placeholder="$ 0000.00"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                <Button className="btn" variant="success" onClick={enviar}>Comprar</Button>
            </Form>
        </div>
    );
}

export default BuyTickets;