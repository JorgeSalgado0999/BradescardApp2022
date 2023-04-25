import React, {useEffect, useReducer, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./Questions.module.css";
import {
	StyledInputDate,
	StyledInputSubmit,
	StyledInputText,
	StyledSelect,
	StyledTextArea,
} from "components/UI/atoms";
import {initial, reducer} from "./reducer";

export const Questions = () => {
	const navigate = useNavigate();

	const [pageAnswers, setPageAnswers] = useState<any[]>([]);

	const [sumbitTxt, setSubmitTxt] = useState("continuar");
	let {page, category} = useParams();
	let num = parseInt(page!);
	let data = require("assets/checklist.json");
	let actualPage = "page" + page;
	let dataPage = data[actualPage];
	const [fields, dispatch] = useReducer(reducer, initial);

	useEffect(() => {
		actualPage = "page" + page;
		dataPage = data[actualPage];
		setInputFields(dataPage);

		setPageAnswers([
			{
				status: "",
				comments: "",
				plan: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				plan: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				plan: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				plan: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				plan: "",
				date: "",
				breach: "",
			},
		]);

		console.log(pageAnswers);

		page === "5" ? setSubmitTxt("Subir") : setSubmitTxt("continuar");
	}, [page]);

	const [inputFields, setInputFields] = useState(dataPage);

	function handleStatus(
		e: React.ChangeEvent<HTMLSelectElement>,
		index: number
	) {
		let temp: any = [...pageAnswers];
		temp[index]["status"] = e.target.value;
		setPageAnswers(temp);
	}
	function handleComents(
		e: React.ChangeEvent<HTMLTextAreaElement>,
		index: number
	) {
		let temp: any = [...pageAnswers];
		temp[index]["comments"] = e.target.value;
		setPageAnswers(temp);
	}
	function handleplan(
		e: React.ChangeEvent<HTMLTextAreaElement>,
		index: number
	) {
		let temp: any = [...pageAnswers];
		temp[index]["plan"] = e.target.value;
		setPageAnswers(temp);
	}
	function handleDate(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		let temp: any = [...pageAnswers];
		temp[index]["date"] = e.target.value;
		setPageAnswers(temp);
	}
	function handleBreach(
		e: React.ChangeEvent<HTMLSelectElement>,
		index: number
	) {
		let temp: any = [...pageAnswers];
		temp[index]["breach"] = e.target.value;
		setPageAnswers(temp);
	}

	const submit = (e: any) => {
		e.preventDefault();
		console.log(pageAnswers);
		localStorage.setItem(String(num), JSON.stringify(pageAnswers));
		navigate(`/agent/questions/${num + 1}`, {replace: true});
	};

	return (
		<div className={`${styles.formBody} mainContainer`}>
			<form onSubmit={submit}>
				{inputFields.map((input: any, index: any) => {
					return (
						<div key={index} className={`row mb-3 ${styles.questionBody}`}>
							<h3 className="mb-3">
								{input.key} - {input.question}
							</h3>
							<div className={`${styles.questionsHeader}`}>
								{/* Qst1 */}
								<div className="questionContainer">
									<StyledSelect
										customType="primary"
										defaultValue={"default"}
										onChange={(e) => handleStatus(e, index)}
									>
										<option value="default" disabled>
											-- Estatus --
										</option>
										<option value="correct">Correcto</option>
										<option value="incidence">Incidencia</option>
										<option value="na">N/A</option>
									</StyledSelect>
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledTextArea
										onChange={(e) => handleComents(e, index)}
										placeholder="Comentarios"
									/>
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledTextArea
										onChange={(e) => handleplan(e, index)}
										placeholder="Plan de Acción"
									/>
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledInputDate onChange={(e) => handleDate(e, index)} />
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledSelect
										customType="primary"
										defaultValue={"default"}
										onChange={(e) => handleBreach(e, index)}
									>
										<option value="default" disabled>
											-- Incumplimiento --
										</option>
										<option value="infra">Infraestructura</option>
										<option value="capa">Capacitación</option>
										<option value="systems">Sistemas</option>
										<option value="local">Decisión Local</option>
										<option value="rol">Rol </option>
										<option value="design">Mal diseño de Control</option>
									</StyledSelect>
								</div>
								{/* Qst1 */}
							</div>
						</div>
					);
				})}
				<StyledInputSubmit
					customType="primary"
					type="submit"
					value={sumbitTxt}
				/>
			</form>
		</div>
	);
};
