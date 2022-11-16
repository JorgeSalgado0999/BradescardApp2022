import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./Questions.module.css";
import {
	StyledInputDate,
	StyledInputSubmit,
	StyledInputText,
	StyledSelect,
	StyledTextArea,
} from "components/UI/atoms";

export const Questions = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState("");
	const [comments, setComments] = useState("Comentarios");
	const [planning, setPlanning] = useState("Plan");
	const [date, setDate] = useState("");
	const [breach, setBreach] = useState("");

	const [pageAnswers, setPageAnswers] = useState<any[]>([]);

	const [sumbitTxt, setSubmitTxt] = useState("continuar");
	let {page} = useParams();
	let num = parseInt(page!);
	let data = require("assets/checklist.json");
	let actualPage = "page" + page;
	let dataPage = data[actualPage];

	useEffect(() => {
		actualPage = "page" + page;
		dataPage = data[actualPage];
		setInputFields(dataPage);

		setPageAnswers([
			{
				status: "",
				comments: "",
				planning: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				planning: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				planning: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				planning: "",
				date: "",
				breach: "",
			},
			{
				status: "",
				comments: "",
				planning: "",
				date: "",
				breach: "",
			},
		]);

		console.log(pageAnswers);

		page == "5" ? setSubmitTxt("Subir") : setSubmitTxt("continuar");
	}, [page]);

	const [inputFields, setInputFields] = useState(dataPage);

	function handleStatus(
		e: React.ChangeEvent<HTMLSelectElement>,
		index: number
	) {
		console.log(index);

		let temp: any = [...pageAnswers];
		temp[index][e.target.name] = e.target.value;
		setPageAnswers(temp);
		console.log(pageAnswers);
	}

	const submit = (e: any) => {
		e.preventDefault();

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
										onChange={(e) => setComments(e.target.value)}
										placeholder="Comentarios"
									/>
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledTextArea
										onChange={(e) => setPlanning(e.target.value)}
										placeholder="Plan de Acción"
									/>
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledInputDate onChange={(e) => setDate(e.target.value)} />
								</div>
								{/* Qst1 */}

								{/* Qst1 */}
								<div className="questionContainer">
									<StyledSelect
										defaultValue={"default"}
										onChange={(e) => setBreach(e.target.value)}
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
