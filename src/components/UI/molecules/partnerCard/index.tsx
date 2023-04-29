import React from "react";
import {socio} from "assets";
import styles from "./PartnerCard.module.css";
import {useNavigate} from "react-router-dom";

interface Props {
	partner: string;
	stores: number;
	active: boolean;
	id: number;
}

export const PartnerCard = (props: Props) => {
	const navigate = useNavigate();

	function handleAgent() {
		navigate(`stores/${props.id}`);
	}

	return (
		<div className={`${styles.cardContainer}`} onClick={() => handleAgent()}>
			<div className={`${styles.photoContainer}`}>
				<img className={`${styles.photo}`} src={socio} alt="" />
			</div>
			<div className={`${styles.data}`}>
				<h5>{props.partner}</h5>
				<p className="p3">{props.stores} tiendas</p>
			</div>
		</div>
	);
};
