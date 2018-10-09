import React from 'react';
import { connect } from 'react-redux';
import {Row, Input, Button, Preloader} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions'

import {
	 DEPENDENCIAEDITAR_NOMBRE,
	 DEPENDENCIAEDITAR_DEPENDIENTE,
	 DEPENDENCIAEDITAR_EDAD
}from '../../types/UsuariosTypes';

const AgregarDependiente = (props) => {
	
	const validarCampos = () =>{
		if(props.dependientenombre === "" || props.dependienteedad === ""|| props.dependientedependiente === ""
			|| props.dependientenombre === null || props.dependienteedad === null|| props.dependientedependiente === null)
			return false;
		else
			return true;
	};


	const handleChange = (event, type) => props.cambiarInput(type, event.target.value);
	
	const enviar = async () =>{
		if (validarCampos()) {

			const{
				dependientenombre,
				dependienteedad,
				dependientedependiente, 
			}=props;
			let id = props.match.params.id
			const valores = {nombre_completo: dependientenombre,
							 dependencia: dependientedependiente,
							 edad: dependienteedad,
							 _usuario: id};
							 console.log(valores, 'Apunto de Enviar')
			props.EnviarDependiente(valores, props.dependientes)
		}
		else
			window.Materialize.toast('Validar los campos.', 2 * 1000, 'red');

};

	return(
			<div>
				<Row>
					<h1 className="center">Agregar Dependiente </h1>
				    
				    <Input placeholder="Nombre"s={7} 
				     value={props.dependientenombre} name="dependientenombre" onChange={(event) => handleChange(event, DEPENDENCIAEDITAR_NOMBRE)}
				    />
				    <Input placeholder="Dependiente" s={6} 
				     value={props.dependienteedad} name="dependientedependiente" onChange={(event) => handleChange(event, DEPENDENCIAEDITAR_EDAD)}
				    />
				    <Input placeholder="Edad" 
				     value={props.dependientedependiente} name="dependienteedad" onChange={(event) => handleChange(event, DEPENDENCIAEDITAR_DEPENDIENTE)}
				    />
				
				</Row>
					<div className="row">
						<div className="center" s={4}>
							<Button
								style={{width: '10%'}}
								waves='light'
								onClick={enviar}
								disabled={props.cargando}>
							Enviar
						</Button>
						<br /><br />
							<Preloader active={props.cargando} size='big'/>
						</div>
					</div>
			</div>

		)

}
const mapStateToProps = ({ UsuariosReducers }) =>
{
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(AgregarDependiente);