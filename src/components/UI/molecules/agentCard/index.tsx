import React from "react";
import {user} from "assets";
import styles from "./AgentCard.module.css";
import {useNavigate} from "react-router-dom";

export const AgentCard = () => {
	const navigate = useNavigate();

	function handleAgent() {
		navigate("1");
	}

	return (
		<div className={`${styles.cardContainer}`} onClick={() => handleAgent()}>
			<div className={`${styles.photoContainer}`}>
				<img className={`${styles.photo}`} src={user} alt="" />
			</div>
			<div className={`${styles.data}`}>
				<h5>Jorge Salgado</h5>
				<p className="p3">01/01/2023</p>
			</div>
		</div>
	);
};
