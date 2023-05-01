import React, {useEffect, useReducer, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./Questions.module.css";
import {
	Loader,
	StyledInputDate,
	StyledInputSubmit,
	StyledInputText,
	StyledSelect,
	StyledTextArea,
} from "components/UI/atoms";
import {initial, reducer} from "./reducer";
import {useQuery} from "react-query";
import {QuestionAPI} from "apis/APIQuestion";
import {QuestionInterface} from "models/appTypes/Question";

export const Questions = () => {
	const [fields, dispatch] = useReducer(reducer, initial);
	const [sumbitTxt, setSubmitTxt] = useState("continuar");
	const [categories, setCategories] = useState<any>([]);
	const [indexes, setIndexes] = useState<number[]>([]);
	const [data, setData] = useState<any>({});
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	const submit = (e: any) => {
		e.preventDefault();
		console.log("submit");
		console.log(fields);

		if (fields.category + 1 === categories.length) {
			console.log("se acabo");
		} else {
			updateValues();
			dispatch({type: "category", value: fields.category + 1});
		}
	};

	function updateValues() {
		//
		dispatch({type: "index", value: fields.index + indexes.length});
		//
		let newIndexes = [];
		let newIndex = fields.index + indexes.length;
		console.log("newIndex", newIndex);
		for (
			let i = 0;
			i < data[categories[fields.category + 1]].questions.length;
			i++
		) {
			newIndexes.push(i + newIndex);
			console.log("se repite:", i);
		}
		setIndexes(newIndexes);
		console.log(newIndexes);
	}

	useEffect(() => {
		QuestionAPI.getByCategory()
			.then((data) => {
				//
				//
				// console.log(data);
				setData(data);
				setCategories(Object.keys(data));
				let localCategories = Object.keys(data);
				for (let i = 0; i < Object.keys(data).length; i++) {
					data[localCategories[i]].questions.map(
						(question: any, index: any) => {
							console.log("index", index);
							console.log("question", question);
							let newQuestion: QuestionInterface = {
								id: question.id,
								question: question.question,
								category: {
									id: data[localCategories[i]].id,
									//TODO: no mando la categoria, solo el id
									category: data[localCategories[i]].id,
								},
								answer: {
									questionId: question.id,
									status: "",
									comments: "",
									plan: "",
									date: new Date(),
									breach: "",
								},
							};
							dispatch({type: "createQuestion", value: newQuestion});
						}
					);
				}
				for (
					let i = fields.index;
					i < data[localCategories[fields.category]].questions.length;
					i++
				) {
					let newIndexes = indexes;
					newIndexes.push(i);
					setIndexes(newIndexes);
				}

				console.log(
					"\n\n\n\n\n\n\n Se han creado todas las preguntas:",
					fields
				);
				console.log(indexes);
				setIsLoading(false);
				//
				//
			})
			.catch((error) => {
				console.log(error);
				setIsError(true);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<div className="mainContainer">
				<div className="row">
					<div className={`col-xs-12 loaderContainer`}>
						<Loader />
					</div>
				</div>
			</div>
		);
	}
	if (isError) {
		return (
			<div className="mainContainer">
				<div className="row">
					<div className={`col-xs-12 loaderContainer`}>
						<h2>Hubo un Error</h2>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`${styles.formBody} mainContainer`}>
			<h1>{categories[fields.category]}</h1>
			<form onSubmit={submit}>
				{/* Starts map for all questions  */}
				{data[categories[fields.category]].questions.map(
					(question: any, index: number) => {
						return (
							<div
								key={question.id}
								className={`row mb-3 ${styles.questionBody}`}
							>
								<h3 className="mb-3">
									{question.id} - {question.question}
								</h3>
								<div className={`${styles.questionsHeader}`}>
									{/* Qst1 */}
									<div className="questionContainer">
										<StyledSelect
											customType="primary"
											defaultValue={"default"}
											onChange={(e: any) =>
												dispatch({
													type: "editQuestion",
													value: {
														index: indexes[index],
														field: "status",
														data: e.target.value,
													},
												})
											}
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

									{/* Qst2 */}
									<div className="questionContainer">
										<StyledTextArea
											value={fields.Questions[indexes[index]].answer.comments}
											onChange={(e) =>
												dispatch({
													type: "editQuestion",
													value: {
														index: indexes[index],
														field: "comments",
														data: e.target.value,
													},
												})
											}
											placeholder="Comentarios"
										/>
									</div>
									{/* Qst2 */}

									{/* Qst3 */}
									<div className="questionContainer">
										<StyledTextArea
											value={fields.Questions[indexes[index]].answer.plan}
											onChange={(e) =>
												dispatch({
													type: "editQuestion",
													value: {
														index: indexes[index],
														field: "plan",
														data: e.target.value,
													},
												})
											}
											placeholder="Plan de Acción"
										/>
									</div>
									{/* Qst3 */}

									{/* Qst4 */}
									<div className="questionContainer">
										<StyledInputDate
											onChange={(e) =>
												dispatch({
													type: "editQuestion",
													value: {
														index: indexes[index],
														field: "date",
														data: e.target.value,
													},
												})
											}
										/>
									</div>
									{/* Qst4 */}

									{/* Qst5 */}
									<div className="questionContainer">
										<StyledSelect
											customType="primary"
											defaultValue={"default"}
											onChange={(e) =>
												dispatch({
													type: "editQuestion",
													value: {
														index: indexes[index],
														field: "breach",
														data: e.target.value,
													},
												})
											}
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
									{/* Qst5 */}
								</div>
							</div>
						);
					}
				)}
				{/* Ends map for all questions  */}

				<StyledInputSubmit
					customType="primary"
					type="submit"
					value={sumbitTxt}
				/>
			</form>
		</div>
	);
};
