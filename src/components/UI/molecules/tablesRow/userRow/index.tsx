import {UserRowProps} from "models";
import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Row.module.css";

export const UserRow: React.FunctionComponent<UserRowProps> = (props) => {
	const navigate = useNavigate();

	function goToAgencie() {
		navigate(`stores/${props.id}`);
	}

	return (
		<tr className={styles.row} key={props.email} onClick={() => goToAgencie()}>
			<td className={styles.firstColumn}>
				<div
					className={`${styles.agencyStatus} ${
						props.active ? styles.active : styles.unactive
					}`}
				></div>
				<div>
					<p className="p3 semi-bold no-margin">{props.name}</p>
				</div>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.businessName}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.manager}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.phone}</p>
			</td>
			<td className={``}>
				<p className="p4 secondary no-margin">{props.email}</p>
			</td>
		</tr>
	);
};
