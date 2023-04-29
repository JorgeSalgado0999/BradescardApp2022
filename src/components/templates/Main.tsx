import React, {useContext, useRef} from "react";
import styles from "./Main.module.css";
import {logo, user, socio} from "assets";
import {NavBar, Header} from "components/UI/organisms";
import {CardReview} from "components/UI/molecules";
import {Outlet} from "react-router-dom";
import {Agent} from "components/pages";
import AlertsContext, {AlertsContextType} from "context/AlertsContext";
import {Alert} from "components/UI/atoms";

export const Main = () => {
	const {Alerts, SetAlerts} = useContext(AlertsContext) as AlertsContextType;
	const toast = useRef<HTMLDivElement>(null);

	if (window.location.pathname === "/agent") {
		console.log("entro");
	}

	return (
		<>
			<div ref={toast} className={styles.toast}>
				{Alerts.map((alert: any, index) => {
					return (
						<Alert
							key={index}
							title={alert.title}
							text={alert.text}
							type={alert.type}
						/>
					);
				})}
			</div>
			<div className="fullPage container">
				{/* */}
				<Header />
				{/* */}

				<main className="row">
					<div className={`col-sm-2 ${styles.navContainer} navbar-side`}>
						<NavBar />
					</div>
					<div className="col-sm-10 content-side">
						{/* Aqui Va el contenido*/}
						<Outlet />
					</div>
					{/* */}
				</main>
			</div>
		</>
	);
};
