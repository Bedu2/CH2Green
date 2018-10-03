import {
	TRAER,
	 EXITO,
	 FALLO,
	 EDITAR_NOMBRE,
	 EDITAR_APELLIDOPATERNO,
	 EDITAR_APELLIDOMATERNO,
	 EDITAR_EDAD,
	 REINICIAR
}from '../types/UsuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre: '',
	paterno:'',
	materno:'',
	edad:''
};

export default (state = INITIAL_STATE, action) =>
{
	switch(action.type){
		case TRAER: return{ ...state, cargando:true, error: ''}; 
		case EXITO: return{ ...state, usuarios: action.payload, cargando: false, error:'' };
		case FALLO: return{ ...state, error: action.payload, cargando:false};
		case REINICIAR: return{...state, cargando: false, error: '', nombre: '', paterno: '', materno:'',edad:''};
		case EDITAR_NOMBRE: return{...state, nombre: action.payload};
		case EDITAR_APELLIDOPATERNO:return{...state, 'paterno': action.payload} ; 
		case EDITAR_APELLIDOMATERNO:return{...state, 'materno': action.payload};
		case EDITAR_EDAD: return{...state, edad:action.payload};
		default: return state;
	}
}