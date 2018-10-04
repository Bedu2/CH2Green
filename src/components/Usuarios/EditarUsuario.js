import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Input, Button, Preloader} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions';

import {
	 EDITAR_NOMBRE,
	 EDITAR_APELLIDOPATERNO,
	 EDITAR_APELLIDOMATERNO,
	 EDITAR_EDAD
}from '../../types/UsuariosTypes';

class Editar extends Component {

	componentDidMount = async () => {
		await this.props.TraerUno(this.props.match.params.id);
	};

	handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

	render() {
		return (
			<div>
					
				<div>
					<Row>
						<h1 className="center">Editar Usuario </h1>
					    <Input placeholder="Nombre"s={7}
					      name="Nombre"
					      value={this.props.nombre}
					      onChange={(event) => this.handleChange(event, EDITAR_NOMBRE)}
					    />
					    <Input placeholder="Apellido Paterno" s={6}
					     value={this.props.paterno} name="Paterno"
					      onChange={(event) => this.handleChange(event, EDITAR_APELLIDOPATERNO)}
					    />
					    <Input placeholder="Apellido Materno" s={6} 
					     value={this.props.materno} name="Materno"
					      onChange={(event) => this.handleChange(event, EDITAR_APELLIDOMATERNO)}
						
					    />
					    <Input placeholder="Edad"
					    value={this.props.edad} name="Edad"
					      onChange={(event) => this.handleChange(event, EDITAR_EDAD)}

					    />
					
					</Row>
						<div className="row">
							<div className="center" s={4}>
								<Button
									style={{width: '10%'}}
									waves='light'
									// onClick={enviar}
									// disabled='true'  <Preloader active='false' size='big'/>
									>
									Enviar
								</Button>
						<br /><br />
							 
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

export default connect(mapStateToProps, UsuariosActions)(Editar);
