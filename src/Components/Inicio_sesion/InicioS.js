import React, {useState} from 'react';
import {Formulario,  ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, } from './Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './ComponentesInicio/Input';
import './InicioS.css'

const App = () => {
	const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

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
			

		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<div className = "Fondo">
			<div className = "row">
				<div className = "col">
		<main>
			<div className = "cont">
			<img className = "Logo"
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                                width="150"
                                height="150"
                            />
							<br/>
							
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
					<Boton type="submit" className = "Botonsito"><span>Ingresar</span></Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
			</div>
		</main>
		</div>
		</div>
		</div>
	);
}
 
export default App;