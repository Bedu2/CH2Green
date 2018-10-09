import {
	TRAER,
	 EXITO,
	 FALLO,
	 EDITAR_NOMBRE,
	 EDITAR_APELLIDOPATERNO,
	 EDITAR_APELLIDOMATERNO,
	 EDITAR_EDAD,
	 DEPENDENCIAEDITAR_NOMBRE,
	 DEPENDENCIAEDITAR_EDAD,
	 DEPENDENCIAEDITAR_DEPENDIENTE,
	 REINICIAR, 
	 PRELOADER,
	 TRUE,
	 FALSE,
	 dEXITO
}from '../types/UsuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	dependientes: [],
	cargando: false,
	error: '',
	nombre: '',
	paterno:'',
	materno:'',
	edad:'',
	direccion:false,
	dependientenombre: '',
	dependienteedad:'',
	dependientedependiente: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch(action.type){
		case TRAER: return{ ...state, cargando:true, error: ''};
		case PRELOADER: return{...state, cargando:false} 
		case EXITO: return{ ...state, usuarios: action.payload, cargando: false, error:'' };
		case dEXITO:return{ ...state, dependientes: action.payload, cargando: false, error:'' };
		case FALLO: return{ ...state, error: action.payload, cargando:false};
		case REINICIAR: return{...state, cargando: false, error: '', nombre: '', paterno: '', materno:'',edad:'', dependientenombre:'', dependienteedad:'',dependientedependiente:''};
		case EDITAR_NOMBRE: return{...state, nombre: action.payload};
		case EDITAR_APELLIDOPATERNO:return{...state, paterno: action.payload} ; 
		case EDITAR_APELLIDOMATERNO:return{...state, materno: action.payload};
		case EDITAR_EDAD: return{...state, edad:action.payload};
		case DEPENDENCIAEDITAR_NOMBRE: return{...state, dependientenombre: action.payload};
		case DEPENDENCIAEDITAR_EDAD: return{...state, dependienteedad: action.payload};
		case DEPENDENCIAEDITAR_DEPENDIENTE: return{...state, dependientedependiente: action.payload};
		case TRUE: return{...state, direccion:true}
		case FALSE: return{...state, direccion:false}
		default: return state;
	}
}