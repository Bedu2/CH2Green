import {
	TRAER,
	 EXITO,
	 FALLO,
	 DEPENDENCIAEDITAR_NOMBRE,
	 DEPENDENCIAEDITAR_EDAD,
	 DEPENDENCIAEDITAR_DEPENDIENTE,
	 REINICIAR, 
	 PRELOADER,
	 TRUE,
	 FALSE,
	 dEXITO
}from '../types/DependientesTypes';

const INITIAL_STATE ={
	dependientes: [],
	usuarios: [],
	cargando: false,
	error: '',
	dependientenombre: '',
	dependienteedad:'',
	dependientedependiente: '',
	direccion:false,
};

export default (state = INITIAL_STATE, action) =>
{
	switch(action.type){
		case TRAER: return{ ...state, cargando:true, error: ''};
		case PRELOADER: return{...state, cargando:false};
		case EXITO: return{ ...state, usuarios: action.payload, cargando: false, error:'' };
		case dEXITO:return{ ...state, dependientes: action.payload, cargando: false, error:'' };
		case FALLO: return{ ...state, error: action.payload, cargando:false};
		case REINICIAR: return{...state, cargando: false, error: '', nombre: '', paterno: '', materno:'',edad:'', dependientenombre:'', dependienteedad:'',dependientedependiente:''};
		case DEPENDENCIAEDITAR_NOMBRE: return{...state, dependientenombre: action.payload};
		case DEPENDENCIAEDITAR_EDAD: return{...state, dependienteedad: action.payload};
		case DEPENDENCIAEDITAR_DEPENDIENTE: return{...state, dependientedependiente: action.payload};
		case TRUE: return{...state, direccion:true};
		case FALSE: return{...state, direccion:false};
		default: return state;
	}
}