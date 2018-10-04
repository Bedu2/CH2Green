import axios from 'axios';
import{
	TRAER,
	EXITO,
	FALLO,
	REINICIAR, 
	PRELOADER,
	EDITAR_NOMBRE,
	EDITAR_APELLIDOPATERNO,
	EDITAR_APELLIDOMATERNO,
 	EDITAR_EDAD,
 	TRUE,
 	FALSE
	 	
}from '../types/UsuariosTypes.js';

export const Direccion = (id) => async(dispatch) =>{
	id ? dispatch({type:FALSE}): dispatch({type:TRUE})
}

export const TraerUsuarios = () => async (dispatch)=>{
	dispatch({type: TRAER});
	try{
		const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/green');
		response.data.reverse();
		dispatch({type:EXITO , payload: response.data});	
	}catch(error){
		dispatch({type: FALLO, payload: error.message});
	}
};

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({ type, payload: valor });
};

export const EnviarUsuario = (valores, usuarios) => async (dispatch) => {
	dispatch({ type: TRAER });

	try {
		const response = await axios.post('https://g2-ch2.herokuapp.com/api/usuarios/green', valores);

		usuarios.unshift(response.data);

		dispatch({ type: EXITO, payload: usuarios });

		window.Materialize.toast('Usuario guardado exitosamente.', 5 * 1000);

		dispatch({ type: REINICIAR });
	}
	catch(error) {
		
		dispatch({ type: FALLO, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};
export const TraerUno = (id) => async (dispatch) => {
	dispatch({type: TRAER});
	
	try{
		let response = await axios.get(`https://g2-ch2.herokuapp.com/api/usuarios/green/${id}`)
		response =response.data['0'];
		dispatch({type:EDITAR_NOMBRE, payload: response.nombre });
		dispatch({type:EDITAR_APELLIDOPATERNO, payload: response.apellidos.paterno });
		dispatch({type:EDITAR_APELLIDOMATERNO, payload: response.apellidos.materno });
		dispatch({type:EDITAR_EDAD, payload: response.edad });
		dispatch({type:PRELOADER})
	}catch(error){
		dispatch({type:FALLO, payload:error.message});
	}
}

export const actualizarUsuaro=(id, arreglo) => async (dispatch) =>{
	dispatch({ type: TRAER });
	try {
		const response = await axios.post(`https://g2-ch2.herokuapp.com/api/usuarios/green/${id}`, arreglo);
		window.Materialize.toast('Usuario editado exitosamente.', 5 * 1000);
		dispatch({ type: REINICIAR });
		const respuesta = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/green');
		respuesta.data.reverse();
		dispatch({type:EXITO , payload: respuesta.data});
	}
	catch(error) {
		
		dispatch({ type: FALLO, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};

export const eliminarUsuario=(id) => async (dispatch) =>{
	dispatch({ type: TRAER });
	try {
		const response = await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/green/${id}`);
		window.Materialize.toast('Usuario eliminado exitosamente.', 5 * 1000);
		dispatch({ type: REINICIAR });
		const respuesta = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/green');
		respuesta.data.reverse();
		dispatch({type:EXITO , payload: respuesta.data});
	}
	catch(error) {
		dispatch({ type: FALLO, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};

