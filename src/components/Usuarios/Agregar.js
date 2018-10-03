import React from 'react';
import { connect } from 'react-redux';
import {Row, Input, Button, Preloader} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions'

import {
	 EDITAR_NOMBRE,
	 EDITAR_APELLIDOPATERNO,
	 EDITAR_APELLIDOMATERNO,
	 EDITAR_EDAD
}from '../../types/UsuariosTypes';

const Agregar = (props) => {
	
	const handleChange = (event, type) => props.cambiarInput(type, event.target.value);
	
	const enviar = async () =>{
		const{
			nombre,
			paterno,
			materno, 
			edad,
		}=props;
		const apellidos= {paterno , materno}
	const valores = {nombre, apellidos, edad};
	console.log("valores", valores);
	
	props.EnviarUsuario(valores, props.usuarios)
};

	return(
			<div>
				<Row>
					<h1 className="center">Agregar Usuario </h1>
				    
				    <Input placeholder="Nombre"s={7} 
				     value={props.nombre} name="Nombre" onChange={(event) => handleChange(event, EDITAR_NOMBRE)}
				    />
				    <Input placeholder="Apellido Paterno" s={6}
				     value={props.paterno} name="Paterno" onChange={(event) => handleChange(event, EDITAR_APELLIDOPATERNO)}
				     />
				    <Input placeholder="Apellido Materno" s={6} 
				     value={props.materno} name="Materno" onChange={(event) => handleChange(event, EDITAR_APELLIDOMATERNO)}
				    />
				    <Input placeholder="Edad" 
				     value={props.edad} name="Edad" onChange={(event) => handleChange(event, EDITAR_EDAD)}
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

export default connect(mapStateToProps, UsuariosActions)(Agregar);