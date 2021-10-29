import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PersonaNatural from './PersonaNatural';


function Asesor() {

    let History = useHistory();

    return (
        <div>
            <PersonaNatural/>
            <Button onClick={() => History.push('/')}>Inicio</Button>
            <br />
            <br />
            <Button onClick={() => History.push('/Roles')}> Regresar</Button>
            <br />
            <br />
            <Button onClick={() => History.push('/PersonaNatural')}>Persona Natural</Button>
            <br />
            <br />
            <Button onClick={() => History.push('/PersonaJuridica')}>Persona Juridica</Button>
        </div>
    );
}

export default Asesor
