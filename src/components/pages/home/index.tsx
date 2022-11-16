import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<h1>Compliance App For Bradescard</h1>
			<Link to="/register">Registrarse</Link>
			<br />
			<Link to="/login">iniciar Sesión</Link>
		</div>
	);
};
