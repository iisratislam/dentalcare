import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const {user, logOut} = useAuth();
	return (
		<div className="d-flex justify-content-between align-items-center head-container container mb-3">
			<div>
				<h2 className="text-info">
				Dental  <small> Care</small>
				</h2>
			</div>
			<div className="mx-5">
				<NavLink
					className="mx-5 text-decoration-none"
					to="/home"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Home
				</NavLink>
				<NavLink
					className="mx-5 text-decoration-none"
					to="/academics"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Specialists
				</NavLink>
				
				<NavLink
					className="mx-5 text-decoration-none"
					to="/about"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Aboutus
				</NavLink>
				{user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink
						className="mx-5 text-decoration-none"
						 to="/login">Login</NavLink>}

				
			</div>
		</div>
	);
};

export default Header;
