import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
	return (
		<div className="menuandme">
			<nav className="myMenu">
				<NavLink exact activeClassName='is-active' to='/' className="menuItem" >
					Home
			</NavLink>
				<NavLink activeClassName='is-active' to='/jobs' className="menuItem">
					Jobs
			</NavLink>
				<NavLink activeClassName='is-active' to='/workers' className="menuItem">
					Employees
			</NavLink>
				{/* <NavLink activeClassName='is-active' to='/contact'>
				Contact
			</NavLink> */}
			</nav>
			<p className="Me">Created By: Hakob Hakobyan</p>
		</div>
	);
}
