import React, {useContext, useState} from "react";
import styles from "./Login.module.css";
import {logo} from "assets";
import UserContext, {UserContextType} from "context/UserContext";
import {Link, useNavigate} from "react-router-dom";

import {
	StyledInputText,
	StyledInputSubmit,
} from "components/UI/atoms/StyledInputs";
import {AuthAPI} from "apis/APIAuth";
import {Loader} from "components/UI/atoms";

export const Login = () => {
	const navigate = useNavigate();
	const {User, SetUser} = useContext(UserContext) as UserContextType;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		setLoading(true);
		console.log("iniciando sesión...");

		AuthAPI.logIn({
			data: {
				email: email,
				password: password,
			},
		})
			.then((response) => {
				// console.log(response);
				SetUser({
					id: response.id,
					name: response.nickname,
					role: response.role,
					permissions: [response.role],
				});

				localStorage.setItem("token", response.token);
				localStorage.setItem("id", response.id);

				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				setResponse(`¡${error}!`);
				setLoading(false);
			});
	};

	return (
		<div className={`container ${styles.background}`}>
			<div className="row center-xs middle-xs">
				<div className={`col-xs-11 col-sm-7 col-md-6 ${styles.main_component}`}>
					<div className="col-xs-12">
						<img src={logo} alt="" className={styles.logo} />
						<form className={styles.form} onSubmit={handleSubmit}>
							<label className="h5 text-bold text-color">Usuario</label>
							<StyledInputText
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<label className="h5 text-bold text-color">Contraseña</label>
							<StyledInputText
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

							<div className={loading ? styles.active : styles.unactive}>
								{loading ? <Loader /> : <p className={`red`}>{response}</p>}
							</div>

							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Iniciar Sesión"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
