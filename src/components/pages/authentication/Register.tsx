import React, {useContext} from "react";
import styles from "./Login.module.css";
import {logo} from "assets";
import UserContext, {UserContextType} from "context/UserContext";
import {Link} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "components/UI/atoms/StyledInputs";

export const Register = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando sesión");
		console.log(User);
	};

	return (
		<div className={`container ${styles.background}`}>
			<div className="row center-xs">
				<div className={`col-xs-12 col-sm-9 col-md-8 ${styles.main_component}`}>
					<div className="col-xs-12">
						<img src={logo} alt="" className={styles.logo} />
						<h1>Generación de Cuentas</h1>
						<form className={styles.form} onSubmit={handleSubmit}>
							<label className="p2 text-bold">Nombre</label>
							<StyledInputText name="name" />

							<label className="p2 text-bold">Correo</label>
							<StyledInputText name="name" />

							<label className="p2 text-bold">Contraseña</label>
							<StyledInputText name="name" />

							<label className="p2 text-bold">Rol de acceso</label>
							<StyledInputText name="name" />

							<StyledInputSubmit type="submit" value="Iniciar Sesión" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
