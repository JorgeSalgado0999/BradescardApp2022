import React from "react";
import {useNavigate} from "react-router-dom";
import {QuestionPartnerRowProps} from "models";
import styles from "./Row.module.css";

export const QuestionListPartnerRow: React.FunctionComponent<
	QuestionPartnerRowProps
> = (props) => {
	const navigate = useNavigate();

	function goToAgencie() {
		navigate(`stores/${props.id}`);
	}

	return (
		<tr className={styles.row} key={props.id} onClick={() => goToAgencie()}>
			<td className={styles.firstColumn}>
				<div
					className={`${styles.agencyStatus} ${
						props.active ? styles.active : styles.unactive
					}`}
				></div>
				<div>
					<p className="p3 semi-bold no-margin">{props.id}</p>
				</div>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.category}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.question}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.online ? "si" : "no"}</p>
			</td>
		</tr>
	);
};
