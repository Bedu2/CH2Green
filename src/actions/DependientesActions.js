import axios from 'axios';

import {
 	dEXITO,
	FALLO,
	EXITO,
	TRAER,
	DEPENDENCIAEDITAR_NOMBRE,
 	DEPENDENCIAEDITAR_DEPENDIENTE,
 	DEPENDENCIAEDITAR_EDAD,
	PRELOADER,
	REINICIAR,
	FALSE,
	TRUE
}from '../types/DependientesTypes.js';

export const TraerDependientes = (id) => async(dispatch) =>{
	dispatch({type:TRAER})

	try{
		const response = await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes_usuario/green/${id}`)
		response.data.reverse();
		
		dispatch({type:dEXITO , payload:response.data});
	}catch(error){
		dispatch({type:FALLO, payload: error.message})
	}
};

export const Direccion = (id) => async(dispatch) =>{
	id ? dispatch({type:FALSE}): dispatch({type:TRUE})
}

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({ type, payload: valor });
};

export const EnviarDependiente = (valores, dependientes) => async(dispatch) =>{
	dispatch ({type: TRAER})
	console.log("Valores Dependiente: ", valores);
	try{
		const response = await axios.post('https://g2-ch2.herokuapp.com/api/dependientes/green', valores);
		
		dependientes.unshift(response.data);
		console.log("Dispatch Dependientes: ", dependientes);
		dispatch({ type: dEXITO, payload: dependientes });

		window.Materialize.toast('Dpendiente guardado exitosamente.', 5 * 1000);
	}
	catch(error) {
		dispatch({ type: FALLO, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};

export const TraerDependiente = (id) => async (dispatch) => {
	dispatch({type: TRAER});
	try{
		let response = await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes/green/${id}`)
		
		response =response.data['0'];
		dispatch({type:DEPENDENCIAEDITAR_NOMBRE, payload: response.nombre_completo});
		dispatch({type:DEPENDENCIAEDITAR_EDAD, payload: response.edad});
		dispatch({type:DEPENDENCIAEDITAR_DEPENDIENTE, payload: response.dependencia});
		dispatch({type:PRELOADER})
	}catch(error){
		dispatch({type:FALLO, payload:error.message});
	}
};

export const actualizarDependiente=(id, arreglo, usuario) => async (dispatch) =>{
	dispatch({ type: TRAER });
	console.log("Dispatch actualizarDependiente: ", id, arreglo, usuario);
	try {
		const response = await axios.post(`https://g2-ch2.herokuapp.com/api/dependientes/green/${id}`, arreglo);
		window.Materialize.toast('Usuario editado exitosamente.', 5 * 1000);
		
		const respuesta = await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes_usuario/green/${usuario}`);
		respuesta.data.reverse();
		dispatch({type:dEXITO , payload: respuesta.data});
	}
	catch(error) {
		
		dispatch({ type: FALLO, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};

export const eliminarDependiente=(id) => async (dispatch) =>{
	dispatch({ type: TRAER });
	try {
		const response = await axios.delete(`https://g2-ch2.herokuapp.com/api/dependientes/green/${id}`);
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