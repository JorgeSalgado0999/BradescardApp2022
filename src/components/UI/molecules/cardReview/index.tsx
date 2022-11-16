import React from "react";
import styles from "./CardReview.module.css";
import {logo, user, socio} from "assets";

export const CardReview = () => {
	return (
		<div className={`${styles.cardReview} col-sm-4`}>
			<div className={`${styles.cardContent} row`}>
				<div className={`col-sm-3`}>
					<img src={socio} alt="" className={styles.cardImage} />
				</div>
				<div className={`col-sm-9 ${styles.cardData}`}>
					<p>Socio: Socio 1</p>
					<p>Tienda: 3</p>
					<p>Fecha: 10/10/2022</p>
				</div>
			</div>
		</div>
	);
};
