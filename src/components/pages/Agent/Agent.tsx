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

			<div className="fullPage row">
				{/* */}
				<div className={`col-md-2 ${styles.navContainer}`}>
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
				<div className="col-md-10 content-side">
					{/* Aqui Va el contenido*/}

					<div className={styles.calendar}>
						<h1>Calendario</h1>
						<p>
							Esta sección se construira al final de acuerdo a la planeación
						</p>
					</div>

					{/* Aqui Va el contenido*/}
					<div className="revision">
						<h1>Últimas revisiones </h1>
						<div className={`${styles.cardRevision} row`}>
							<div className="col-md-3">
								<img src={logo} alt="" className={styles.logoPhoto} />
							</div>
							<div className="col-md-9">
								<p>Socio: info...</p>
								<p>Tienda: info...</p>
								<p>Fecha: info...</p>
							</div>
						</div>
					</div>
					{/* Aqui Va el contenido*/}
				</div>
				{/* */}
			</div>
		</div>
	);
};
