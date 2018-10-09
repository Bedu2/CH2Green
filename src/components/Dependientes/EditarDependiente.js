import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {Row, Input, Button, Preloader} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions';

import {
	 DEPENDENCIAEDITAR_NOMBRE,
	 DEPENDENCIAEDITAR_DEPENDIENTE,
	 DEPENDENCIAEDITAR_EDAD
}from '../../types/UsuariosTypes';

class EditarDependiete extends Component {

	componentDidMount = async () => {
	await this.props.TraerDependiente(this.props.match.params.iddep);
	console.log("this.props.match.params", this.props.match.params);
		
	};

	actualizar = () => {
		if (this.validarCampos()) {
			const{
				dependientenombre,
				dependienteedad,
				dependientedependiente, 
			}=this.props;

			let id = this.props.match.params.iddep
			const valores = {nombre_completo: dependientenombre,
							 dependencia: dependientedependiente,
							 edad: dependienteedad,
							 _usuario: this.props.match.params.idusu};	
			
			this.props.actualizarDependiente(id, valores, this.props.match.params.idusu)
			console.log(dependienteedad)
		}
		else
			window.Materialize.toast('Validar los campos.', 2 * 1000, 'red');
	}

	handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

	validarCampos = () =>{
		if(this.props.dependientenombre === "" || this.props.dependienteedad=== ""|| this.props.dependientedependiente=== "")
			return false;
		else
			return true;
	};

	render() {
		return (
			<div>
				{this.props.direccion? <Redirect to='/'/>: ''}	
				<div>
					<Row>
					<h1 className="center">Editar Dependiente </h1>
				    
				    <Input placeholder="Nombre"s={7} 
				     value={this.props.dependientenombre} name="dependientenombre" onChange={(event) => this.handleChange(event, DEPENDENCIAEDITAR_NOMBRE)}
				    />
				    <Input placeholder="Dependiente" s={6} 
				     value={this.props.dependienteedad} name="dependientedependiente" onChange={(event) => this.handleChange(event, DEPENDENCIAEDITAR_EDAD)}
				    />
				    <Input placeholder="Edad" 
				     value={this.props.dependientedependiente} name="dependienteedad" onChange={(event) => this.handleChange(event, DEPENDENCIAEDITAR_DEPENDIENTE)}
				    />
				
				</Row>
						<div className="row">
							<div className="center" s={4}>
								<Button
									style={{width: '10%'}}
									waves='light'
									color={'green'}
									onClick={this.actualizar}
								>
									Enviar
								</Button>
	
						<br/><br />
							<Preloader active={this.props.cargando} size='big'/>							
							 
						</div>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps =({ UsuariosReducers }) =>{
	
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(EditarDependiete);
