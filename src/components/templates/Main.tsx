import React from "react";
import styles from "./Main.module.css";
import {logo, user, socio} from "assets";
import {NavBar, Header} from "components/UI/organisms";
import {CardReview} from "components/UI/molecules";
import {Outlet} from "react-router-dom";
import {Agent} from "components/pages";

export const Main = () => {
	if (window.location.pathname === "/agent") {
		console.log("entro");
	}

	return (
		<>
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
