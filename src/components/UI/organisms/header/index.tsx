import React from "react";
import styles from "./Header.module.css";
import {logo, user, socio} from "assets";

export const Header = () => {
	return (
		<header className="row">
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
	);
};
