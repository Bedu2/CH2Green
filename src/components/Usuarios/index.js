import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table, Icon} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions';


class Usuarios extends Component {

	componentDidMount() {
		this.props.Direccion(true);
		this.props.TraerUsuarios();
	}

	desplegarUsuarios = () => (
		<Table hoverable={true}>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Apellido P</th>
								<th>Apellido M</th>
								<th>Edad</th>
								<th>Opciones</th>
							</tr>
						</thead>

						<tbody>
							{
								this.props.usuarios.map((elem, index) =>(
									<tr key={elem._id}>
										<td>{elem.nombre}</td>
										<td>{elem.apellidos.paterno}</td>
										<td>{elem.apellidos.materno}</td>
										<td>{elem.edad}</td>
										<td><Link to={`Usuarios/${elem._id}`} ><Icon> face </Icon></Link> 
										<br/><Link to={`/EditarUsuario/${elem._id}`} ><Icon> create </Icon></Link> 
										<br/>
										<Link to={`/EliminarUsuario/${elem._id}`} ><Icon> delete </Icon></Link> </td>

									</tr>
									))
							}
							
						</tbody>
				
				</Table>
	);

	render() {
		return (
			<div>
					{this.desplegarUsuarios()}
			</div>
		);
	}
}


const mapStateToProps =({ UsuariosReducers }) =>{
	
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
