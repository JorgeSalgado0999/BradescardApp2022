import React from "react";
import styles from "./NavBar.module.css";
import {logo, user, socio} from "assets";
import {Link} from "react-router-dom";

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<img src={logo} alt="" className={styles.logoPhoto} />
				</li>
				<li>
					<Link to="/agent">
						<p> Inicio</p>
					</Link>
				</li>
				<li>
					<Link to="/agent/checklist">
						<p> Nueva Revisión</p>
					</Link>
				</li>
				<li>
					<p> Subir Revisión</p>
				</li>
				<li>
					<p> Mis Revisiones</p>
				</li>
			</ul>
		</nav>
	);
};
