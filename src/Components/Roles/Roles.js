import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form'
import './Roles.css'

const Roles = () => {
    let History = useHistory();
    return (
        <div>
            <Button onClick = {()=>History.push('/')}>Regresar</Button>
            <div className = "Croles">
            <div className = "row">
                <h1 className = "TituloR">Escoge tu Rol</h1>
                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://es.seaicons.com/wp-content/uploads/2015/07/Manager-icon.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li><b>Director Operativo</b></li>
                                <div className = "Formu"><li><Form.Select aria-label="Default select example">
                                        <option className = "Lform">Selecciona el # de Rol</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                    </Form.Select></li></div>
                                    <br/>
                                <li><a href = "/Director"><img className = "ImagenF"
                                alt=""
                                src = "http://cenfma.com/img/flecha.png"
                                width = "50"
                                height = "50" /></a>
                                </li>
                            </ul>
                        </div>
                        {/* column2 */}
                         <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/512/1802/1802979.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li><b>Gerente</b></li>
                                <div className = "Formu"><li><Form.Select aria-label="Default select example">
                                        <option className = "Lform">Selecciona el # de Rol</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                    </Form.Select></li></div>
                                    <br/>
                                <li><a href = "/Gerente"><img className = "ImagenF"
                                alt=""
                                src = "http://cenfma.com/img/flecha.png"
                                width = "50"
                                height = "50" /></a>
                                </li>
                            </ul>
                        </div>
                        {/* column3 */}
                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://www.deem.com.ar/images/diseno-web/deem-atencionalcliente.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li><b>Asesor</b></li>
                                <div className = "Formu"><li><Form.Select aria-label="Default select example">
                                        <option className = "Lform">Numero de Rol</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                    </Form.Select></li></div>
                                    <br/>
                                <li><a href = "/Asesor"><img className = "ImagenF"
                                alt=""
                                src = "http://cenfma.com/img/flecha.png"
                                width = "50"
                                height = "50" /></a>
                                </li>
                            </ul>

                        </div>

                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://image.flaticon.com/icons/png/512/1059/1059923.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li><b>Cajero</b></li>
                                <div className = "Formu"><li><Form.Select aria-label="Default select example">
                                        <option className = "Lform">Selecciona el # de Rol</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                    </Form.Select></li></div>
                                    <br/>
                                <li><a href = "/Cajero"><img className = "ImagenF"
                                alt=""
                                src = "http://cenfma.com/img/flecha.png"
                                width = "50"
                                height = "50" /></a>
                                </li>
                            </ul>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Roles
