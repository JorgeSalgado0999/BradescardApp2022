import React from "react";
import styles from "./Agent.module.css";
import {logo, user, socio} from "assets";
import {NavBar, Header} from "components/UI/organisms";
import {CardReview} from "components/UI/molecules";

export const Agent = () => {
	return (
		<div className="mainContainer row">
			<div className="col-sm-12">
				<div className={styles.calendar}>
					<h1>Calendario</h1>
					<p>Esta sección se construira al final de acuerdo a la planeación</p>
				</div>
			</div>

			{/* Aqui Va el contenido*/}
			<div className="col-sm-12">
				<h1>Últimas revisiones </h1>
				<div className={`${styles.reviews} row`}>
					<CardReview />
					<CardReview />
					<CardReview />
				</div>
				{/* Cierra reviews*/}
			</div>
		</div>
	);
};
