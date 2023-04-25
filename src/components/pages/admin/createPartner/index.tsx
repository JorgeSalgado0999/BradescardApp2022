import React, {useState} from "react";

import {AgentCard} from "components/UI/molecules";
import {
	Button,
	Input,
	StyledInputSubmit,
	StyledSelect,
} from "components/UI/atoms";

import styles from "./Agents.module.css";
import {useNavigate} from "react-router-dom";

export const CreatePartner = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	function handleSubmit(event: React.FormEvent<EventTarget>) {
		event.preventDefault();
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12 mt-3">
					<h1>Crear Socio</h1>
					<form className={`row`} onSubmit={handleSubmit}>
						<div className="col-xs-7">
							<Input placeholder="Nombre" value={value} setValue={setValue} />
							<Input placeholder="imagen" value={value} setValue={setValue} />
						</div>

						<div className="col-xs-12">
							<StyledInputSubmit value="Crear Socio" customType="primary" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
