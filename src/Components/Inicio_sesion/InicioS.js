import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import './InicioS.css'

const InicioS = () => {

let History = useHistory();

    return (
      <div>
      <div className = "Cprimario">
        <div className = "Csecundario">
        <img className = "Logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1045px-Sena_Colombia_logo.svg.png"
          width="200"
          height="200"
    
        />
      <Form className = "Formulario">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className = "Ccorreo"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" className = "Ccontraseña"/>
      </Form.Group>
      <div className = "check"><Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Recordarme" />
        </Col>
      </Form.Group></div>
      <div className = "Bingresar">
      <Button variant="primary" onClick = {()=>History.push('/Roles')}>
        Ingresar
      </Button>
      </div>
    </Form>
    </div>
    </div>
    </div>
    )
}

export default InicioS
