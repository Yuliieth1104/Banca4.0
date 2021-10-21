import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Director = () => {

let History  = useHistory();

    return (
        <div>
            <Button onClick = {()=>History.push('/')}>Inicio</Button>
            <br/>
            <br/>
            <Button onClick = {()=>History.push('/Roles')}> Regresar</Button>
        </div>
    )
}

export default Director
