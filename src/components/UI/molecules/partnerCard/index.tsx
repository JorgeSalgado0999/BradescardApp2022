import React from "react";
import {socio} from "assets";
import styles from "./PartnerCard.module.css";
import {useNavigate} from "react-router-dom";

export const PartnerCard = () => {
	const navigate = useNavigate();

	function handleAgent() {
		navigate("1");
	}

	return (
		<div className={`${styles.cardContainer}`} onClick={() => handleAgent()}>
			<div className={`${styles.photoContainer}`}>
				<img className={`${styles.photo}`} src={socio} alt="" />
			</div>
			<div className={`${styles.data}`}>
				<h5>C&A</h5>
				<p className="p3">13 tiendas</p>
			</div>
		</div>
	);
};
