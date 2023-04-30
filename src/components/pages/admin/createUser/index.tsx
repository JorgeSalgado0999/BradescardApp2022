import React, {useContext, useState} from "react";

import {AgentCard} from "components/UI/molecules";
import {
	Button,
	Input,
	StyledInputSubmit,
	StyledSelect,
} from "components/UI/atoms";

import styles from "./Agents.module.css";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {UserAPI} from "apis";
import AlertsContext, {AlertsContextType} from "context/AlertsContext";

export const CreateUser = () => {
	const navigate = useNavigate();
	const {Alerts, SetAlerts, createAlert} = useContext(
		AlertsContext
	) as AlertsContextType;
	const [value, setValue] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [nickeName, setNickeName] = useState("");
	const [gender, setGender] = useState(""); // [0] = Femenino, [1] = Masculino
	const [role, setRole] = useState("");

	const addUserMutation = useMutation({
		mutationFn: () =>
			UserAPI.create({
				data: {
					email: email,
					password: password,
					firstName: firstName,
					lastName: lastName,
					nickname: nickeName,
					gender: gender,
					userRole: role,
				},
			}),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Usuario Creado",
				"El usuario se creo correctamente"
			);
		},
		onError(error, variables, context) {
			console.log("después de esto va alerta", error);
			createAlert("error", "Error", "Hubo un error al crear el Usuario");
		},
	});

	function handleSubmit(event: React.FormEvent<EventTarget>) {
		event.preventDefault();
		addUserMutation.mutate();
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12">
					<h1>Crear Agente</h1>
					<form className={`row`} onSubmit={handleSubmit}>
						<div className="col-xs-7">
							<Input placeholder="Correo" value={email} setValue={setEmail} />
							<Input
								placeholder="Contraseña"
								value={password}
								setValue={setPassword}
							/>
							<Input
								placeholder="Nombre(s)"
								value={firstName}
								setValue={setFirstName}
							/>
							<Input
								placeholder="Apellido(s)"
								value={lastName}
								setValue={setLastName}
							/>
							<Input
								placeholder="Nombre de Usuario"
								value={nickeName}
								setValue={setNickeName}
							/>
							<StyledSelect
								customType="select"
								defaultValue={"default"}
								onChange={(e) => setGender(e.target.value)}
							>
								<option value="default" disabled>
									-- Género --
								</option>
								<option value="0">Femenino</option>
								<option value="1">Masculino</option>
							</StyledSelect>
							<StyledSelect
								customType="select"
								defaultValue={"default"}
								onChange={(e) => setRole(e.target.value)}
							>
								<option value="default" disabled>
									-- Rol --
								</option>
								<option value="admin">Admin</option>
								<option value="agent">Agente</option>
							</StyledSelect>
						</div>

						<div className="col-xs-12">
							<StyledInputSubmit value="Crear Usuario" customType="primary" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
