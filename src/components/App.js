import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import {Route, BrowserRouter} from 'react-router-dom';
import Usuarios from './Usuarios';
import AgregarUsuario from './Usuarios/Agregar';
import EditarUsuario from './Usuarios/EditarUsuario';
import Eliminar from './Usuarios/Eliminar';
import Dependientes from './Dependientes';

class App extends Component {
  render() {
    return (
      <div>
        	<BrowserRouter >
	        	<div>
	          		<Header/>
	        		   <br/>
                 
                 <Route exact path ='/' component={Usuarios}/>
                 <Route exact path ='/AgregarUsuario' component={AgregarUsuario}/>
                 <Route exact path ='/Usuarios/:id' component={Dependientes}/>
                 <Route exact path ='/EliminarUsuario/:id' component={Eliminar}/>
                 <Route exact path ='/EditarUsuario/:id' component={EditarUsuario}/>
                 <Route exact path ='/WacharUsuario/:id' component={AgregarUsuario}/>



	        	</div>
        		
        	</BrowserRouter>
        			
          
      </div>
    );
  }
}

export default App;
