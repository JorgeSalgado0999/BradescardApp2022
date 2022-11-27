import React, {useContext} from "react";
import styles from "./Header.module.css";
import {logo, user, socio} from "assets";
import UserContext, {UserContextType} from "context/UserContext";

export const Header = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	return (
		<header className="row">
			<div className={styles.userInfo}>
				<div className={styles.info}>
					<h5>{User!.name}</h5>
					<h5>
						<span>{User!.rol}</span>
					</h5>
				</div>
				<img src={user} alt="" className={styles.userPhoto} />
			</div>
		</header>
	);
};
