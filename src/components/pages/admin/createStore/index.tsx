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
import {PartnerAPI} from "apis/APIPartners";
import AlertsContext, {AlertsContextType} from "context/AlertsContext";

export const CreateStore = () => {
	const navigate = useNavigate();
	const [partnerName, setPartnerName] = useState("");
	const {Alerts, SetAlerts, createAlert} = useContext(
		AlertsContext
	) as AlertsContextType;

	const addPartnerMutation = useMutation({
		mutationFn: () =>
			PartnerAPI.create({
				data: {
					name: partnerName,
				},
			}),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Partner Creado",
				"El Partner se creo correctamente"
			);
		},
		onError(error, variables, context) {
			console.log("después de esto va alerta", error);
			createAlert("error", "Error", "Hubo un error al crear el Partner");
		},
	});

	function handleSubmit(event: React.FormEvent<EventTarget>) {
		event.preventDefault();
		addPartnerMutation.mutate();
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12 mt-3">
					<h1>Crear Socio</h1>
					<form className={`row`} onSubmit={handleSubmit}>
						<div className="col-xs-7">
							<Input
								placeholder="Nombre"
								value={partnerName}
								setValue={setPartnerName}
							/>
						</div>

						<div className="col-xs-12">
							<StyledInputSubmit
								value="Crear Socio"
								customType="primary"
								onClick={handleSubmit}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
