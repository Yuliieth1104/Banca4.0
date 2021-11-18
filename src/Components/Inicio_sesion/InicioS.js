import React, {useState} from 'react';
import {Formulario,  ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, } from './Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './ComponentesInicio/Input';
import './InicioS.css'
import logo from '../Inicio_sesion/Logo/logo.svg'
import { useHistory } from "react-router-dom";

const App = () => {
	const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
	let history = useHistory();

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		password: /^.{4,12}$/, // 4 a 12 digitos.
		
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			password.valido === 'true' 
      
			)
    {
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarPassword({campo: '', valido: null});
			history.push("/Roles");
			

		} else {
			cambiarFormularioValido(false);
		}
	}

	return (

		
				
		<div className = "Fondo">
		<main className="main">
			<div className = "cont">
			<img className = "Logo"
                                alt=""
                                src={logo}
                                width="400"
                                height="150"
                            />
							<br/>
							<div className = "">
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Usuario"
					placeholder="john123"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
				/>
				
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<br/>
				<ContenedorBotonCentrado>
					<Boton type="submit" className = "Botonsito" ><span>Ingresar</span></Boton>
					{/* {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>} */}
				</ContenedorBotonCentrado>
			</Formulario>
			</div>
			</div>
		</main>
		</div>
	);
}
 
export default App;