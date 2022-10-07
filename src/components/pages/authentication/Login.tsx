import React, {useContext} from "react";
import styles from "./Login.module.css";
import {logo} from "assets";
import UserContext, {UserContextType} from "context/UserContext";
import {Link} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "components/UI/atoms/StyledInputs";

export const Login = () => {
	const {User, SetUser} = useContext(UserContext) as UserContextType;

	const login = () => {
		SetUser({
			id: 1,
			name: "Jhon",
			permissions: [""],
		});
	};
	const loginAdmin = () => {
		SetUser({
			id: 1,
			name: "Jhon",
			permissions: ["admin"],
		});
	};

	const logout = () => {
		SetUser(null);
	};

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
						<form className={styles.form} onSubmit={handleSubmit}>
							<label className="p2 text-bold">Usuario</label>
							<StyledInputText name="name" />

							<label className="p2 text-bold">Contraseña</label>
							<StyledInputText name="name" />

							<StyledInputSubmit type="submit" value="Iniciar Sesión" />
						</form>
						<div>
							<Link to="/admin">admin</Link>
							<br />
							<Link to="/agent">agent</Link>
							<br />
							<Link to="/test">test</Link>
						</div>
						{User ? (
							<button onClick={logout}>Logout</button>
						) : (
							<div>
								<button onClick={login}>Login</button>
								<br />
								<button onClick={loginAdmin}>Login Admin</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
