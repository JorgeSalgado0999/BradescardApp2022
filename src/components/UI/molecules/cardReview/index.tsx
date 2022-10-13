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
				<div className="col-sm-9">
					<p>Socio: info...</p>
					<p>Tienda: info...</p>
					<p>Fecha: info...</p>
				</div>
			</div>
		</div>
	);
};
