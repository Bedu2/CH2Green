import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table, Icon, Button} from 'react-materialize';
import * as UsuariosActions from '../../actions/UsuariosActions';


class Dependientes extends Component {

	componentDidMount() {
		this.props.TraerDependientes(this.props.match.params.id);
	}

	desplegarUsuarios = () => (
		<Table hoverable={true}>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Edad P</th>
								<th>Dependencia M</th>
							</tr>
						</thead>

						<tbody>{
							this.props.dependientes.map((elemento, index) => (	
								<tr key={elemento._id}>
									<td>{elemento.nombre_completo}</td>
									<td>{elemento.edad}</td>
									<td>{elemento.dependencia}</td>
									<td>
										{}
										<Link to={`/EditarDependiente/${elemento._usuario}/${elemento._id}`}><Icon> create </Icon></Link> <br/>
										<Link to={`/EliminarDependiente/${elemento._id}`}><Icon> delete </Icon></Link> <br/>
									</td>
								</tr>
								))
						}							
						</tbody>
				
				</Table>
	);

	render() {
		return (
			<div>
					<div className="row">
						<h4 className="col s4">
						{`
						${this.props.match.params.nombre}					
						${this.props.match.params.apellidop}					
						${this.props.match.params.apellidom}					
						`}
					</h4>
							<Link to={`/AgregarDependiente/${this.props.match.params.id}`} >
								<Button floating large className='red' waves='light' icon='add'/>
							</Link>
												
					</div>
					
					{this.desplegarUsuarios()}
					
			</div>
		);
	}
}


const mapStateToProps =({ UsuariosReducers }) =>{
	
	return UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(Dependientes);
