import React, {useContext, useState} from "react";

import {AgentCard} from "components/UI/molecules";
import {
	Button,
	Input,
	StyledInputSubmit,
	StyledSelect,
} from "components/UI/atoms";

import styles from "./Agents.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import AlertsContext, {AlertsContextType} from "context/AlertsContext";
import {StoreAPI} from "apis/APIStores";
import States from "utils/states";

export const CreateStore = () => {
	const navigate = useNavigate();
	const params = useParams();
	const PartnerId: string = String(params.partnerId);
	const [partnerName, setPartnerName] = useState("");
	const {Alerts, SetAlerts, createAlert} = useContext(
		AlertsContext
	) as AlertsContextType;
	const [name, setName] = useState("");
	const [partner, setPartner] = useState(PartnerId);
	const [state, setState] = useState("");
	const [address, setAddress] = useState("");
	const [exteriorNumber, setExteriorNumber] = useState("");
	const [interiorNumber, setInteriorNumber] = useState("");
	const [city, setCity] = useState("");
	const [suburb, setSuburb] = useState("");
	const [postalCode, setPostalCode] = useState("");

	const addStoreMutation = useMutation({
		mutationFn: () =>
			StoreAPI.create({
				data: {
					name: name,
					partnerId: partner,
					state: state,
					street: address,
					exteriorNumber: exteriorNumber,
					interiorNumber: interiorNumber,
					city: city,
					suburb: suburb,
					postalCode: postalCode,
				},
			}),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Tienda Creado",
				"La tienda se creo correctamente"
			);
		},
		onError(error, variables, context) {
			console.log("después de esto va alerta", error);
			createAlert("error", "Error", "Hubo un error al crear el Partner");
		},
	});

	function handleSubmit(event: React.FormEvent<EventTarget>) {
		event.preventDefault();
		addStoreMutation.mutate();
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12 mt-3">
					<h1>Crear Tienda</h1>
					<form className={`row`} onSubmit={handleSubmit}>
						<div className="col-xs-7">
							<Input placeholder="Nombre" value={name} setValue={setName} />
							<Input
								placeholder="partnerId"
								value={partner}
								setValue={setPartner}
							/>
							<StyledSelect
								customType="secondary"
								defaultValue=""
								onChange={(e) => setState(e.target.value)}
							>
								<option value="" disabled>
									*-- Estado --
								</option>
								{States.map((e, index) => {
									return (
										<option key={index} value={e.sulg}>
											{e.name}
										</option>
									);
								})}
							</StyledSelect>
							<Input
								placeholder="calle"
								value={address}
								setValue={setAddress}
							/>
							<Input
								placeholder="Nº exterior"
								value={exteriorNumber}
								setValue={setExteriorNumber}
							/>
							<Input
								placeholder="Nº interior"
								value={interiorNumber}
								setValue={setInteriorNumber}
							/>
							<Input placeholder="Ciudad" value={city} setValue={setCity} />
							<Input
								placeholder="Colonia"
								value={suburb}
								setValue={setSuburb}
							/>
							<Input
								placeholder="Código postal"
								value={postalCode}
								setValue={setPostalCode}
							/>
						</div>

						<div className="col-xs-12">
							<StyledInputSubmit
								value="Crear Tienda"
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
