import React from 'react';
import {Navbar, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

const Header = (props) => (
	<div>
		<Navbar >
			<li>
				<Link to='/' >
					<Icon large>face</Icon>

				</Link>				
			</li>
			<li>
				<Link to='/AgregarUsuario' >
					<Icon large>add_circle</Icon>

				</Link>				
			</li>
		</Navbar>
	</div>
);

export default Header;