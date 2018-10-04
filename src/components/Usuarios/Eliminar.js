import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as UsuariosActions from '../../actions/UsuariosActions';

class Editar extends Component {

	componentDidMount = async () => {
		await this.props.TraerUno(this.props.match.params.id);
		this.puestodo()
	};

	puestodo=() =>{
		let texto=''
		if((window.confirm('Estas seguro que quieres eliminar este usuario'))){
			this.props.eliminarUsuario(this.props.match.params.id)
		}
		this.props.Direccion(this.props.direccion);

		return texto;
	}

	render() {
		return(	
		<div>
			{this.props.direccion? <Redirect to='/'/>: ''}	
		</div>
		)

	}
}


const mapStateToProps =({ UsuariosReducers }) =>{
	
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(Editar);
