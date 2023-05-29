import React, {useContext, useEffect, useState} from "react";

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
import {QuestionAPI} from "apis/APIQuestion";

export const CreateQuestion = () => {
	const navigate = useNavigate();
	const [question, setQuestion] = useState("");
	const [category, setCategory] = useState("");
	const [riskLevel, setRiskLevel] = useState("");
	const [categories, setCategories] = useState([]);
	const {Alerts, SetAlerts, createAlert} = useContext(
		AlertsContext
	) as AlertsContextType;

	const addQuestionMutation = useMutation({
		mutationFn: () =>
			QuestionAPI.create({
				data: {
					question: question,
					CategoryId: category,
					riskLevel: riskLevel,
				},
			}),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Pregunta Creado",
				"La pregunta se creo correctamente"
			);
		},
		onError(error, variables, context) {
			console.log("después de esto va alerta", error);
			createAlert("error", "Error", "Hubo un error al crear la pregunta");
		},
	});

	function handleSubmit(event: React.FormEvent<EventTarget>) {
		event.preventDefault();
		addQuestionMutation.mutate();
	}

	useEffect(() => {
		QuestionAPI.getCategories().then((data) => {
			console.log(data);
			setCategories(data);
		});
	}, []);

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12 mt-3">
					<h1>Crear Pregunta</h1>
					<form className={`row`} onSubmit={handleSubmit}>
						<div className="col-xs-7">
							<Input
								placeholder="Pregunta"
								value={question}
								setValue={setQuestion}
							/>
						</div>
						<div className="col-xs-7">
							<StyledSelect
								customType="primary"
								value={category}
								onChange={(e: any) => setCategory(e.target.value)}
							>
								<option value="" disabled>
									-- Categoría --
								</option>
								{categories.map((category: any) => (
									<option value={category.id}>{category.category}</option>
								))}
							</StyledSelect>
						</div>
						<div className="col-xs-7">
							<StyledSelect
								customType="primary"
								value={riskLevel}
								onChange={(e: any) => setRiskLevel(e.target.value)}
							>
								<option value="" disabled>
									-- Riesgo --
								</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</StyledSelect>
						</div>

						<div className="col-xs-12">
							<StyledInputSubmit
								value="Crear Pregunta"
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
