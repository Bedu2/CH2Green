import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as DependientesActions from '../../actions/DependientesActions';

class EliminarDependiente extends Component {

	componentDidMount = async () => {

		// await this.props.TraerUno(this.props.match.params.id);
		// await this.props.TraerDependiente(this.props.match.params.id);
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
			{this.props.direccion ? <Redirect to='/'/>: ''}	
		</div>
		)

	}
}


const mapStateToProps =({ DependientesReducers }) =>{
	
	return DependientesReducers;
}

export default connect(mapStateToProps, DependientesActions)(EliminarDependiente);
