import React from "react";
import styles from "./Agent.module.css";
import {logo, user} from "assets";

export const Agent = () => {
	return (
		<div className="container">
			{/* */}
			<header>
				<div className={styles.userInfo}>
					<div className={styles.info}>
						<h5>Jorge Salgado</h5>
						<h5>
							<span>Agente</span>
						</h5>
					</div>
					<img src={user} alt="" className={styles.userPhoto} />
				</div>
			</header>
			{/* */}

			<div className="row">
				{/* */}
				<div className="col-md-2">
					<nav>
						<ul>
							<li>
								<img src={logo} alt="" className={styles.logoPhoto} />
							</li>
							<li>Inicio</li>
							<li>Nueva Revisión</li>
							<li>Subir Revisión</li>
							<li>Mis Revisiones</li>
						</ul>
					</nav>
				</div>
				{/* */}
				<div className="col-md-10">
					{/* Aqui Va el contenido*/}
					<h1>Titulo</h1>
				</div>
				{/* */}
			</div>
		</div>
	);
};
