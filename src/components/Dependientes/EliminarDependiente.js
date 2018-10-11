import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as UsuariosActions from '../../actions/UsuariosActions';

class EliminarDependiente extends Component {

	componentDidMount = async () => {
<<<<<<< HEAD
		await this.props.TraerUno(this.props.match.params.id);
=======
		await this.props.TraerDependiente(this.props.match.params.id);
>>>>>>> a2f9bb37a452445b93cb2c199376e974bb3250d2
		this.puestodo()
	};

	puestodo=() =>{
		let texto=''
		if((window.confirm('Estas seguro que quieres eliminar este dependiente'))){
			this.props.eliminarDependiente(this.props.match.params.id)
		}
		this.props.Direccion(this.props.direccion);

		return texto;
	}

	render() {
		return(	
		<div>
<<<<<<< HEAD
			{this.props.direccion ? <Redirect to='/'/>: ''}	
=======
			{this.props.direccion? <Redirect to='/'/>: ''}	
>>>>>>> a2f9bb37a452445b93cb2c199376e974bb3250d2
		</div>
		)

	}
}


const mapStateToProps =({ UsuariosReducers }) =>{
	
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(EliminarDependiente);
