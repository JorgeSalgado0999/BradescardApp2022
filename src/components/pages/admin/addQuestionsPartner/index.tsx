import React, {useContext, useReducer} from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Checkbox, Loader} from "components/UI/atoms";

import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import {
	PartnersTable,
	QuestionsListPartnerTable,
	QuestionsListTable,
} from "components/UI/organisms";
import {QuestionAPI} from "apis/APIQuestion";

import styles from "./AddQuestionsPartner.module.css";
import {initial, reducer} from "./reducer";
import AlertsContext, {AlertsContextType} from "context/AlertsContext";

export const AddQuestionsPartner = () => {
	const [refresh, setRefresh] = React.useState(false);
	const navigate = useNavigate();
	const params = useParams();
	const PartnerId: string = String(params.partnerId);
	const {state} = useLocation();
	const {questionsIds} = state || handleRefresh(); // Read values passed on state
	const [fields, dispatch] = useReducer(reducer, initial);

	const {Alerts, SetAlerts, createAlert} = useContext(
		AlertsContext
	) as AlertsContextType;

	function handleRefresh() {
		//FIXME: no puedo modificar el estado ya que se genera un loop infinito de renders
		// setRefresh(true);
		return {questionsIds: []};
	}

	function findObjectById(id: string, arrayOfObjects: any) {
		for (let i = 0; i < arrayOfObjects.length; i++) {
			if (arrayOfObjects[i].id === id) {
				return arrayOfObjects[i];
			}
		}

		return null; // Return null if no matching object is found
	}

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`questions`, []],
		queryFn: () => QuestionAPI.getAll(),
		onSuccess: (data) => {
			// if (refresh) {
			// 	navigate("/admin/partners");
			// }
			data.forEach((question: any) => {
				let temp = findObjectById(question.id, questionsIds);
				if (!temp) {
					console.log("no existe");
					dispatch({
						type: "createQuestion",
						value: {
							id: question.id,
							question: question.question,
							checked: false,
							online: false,
						},
					});
				} else {
					console.log("existe");
					dispatch({
						type: "createQuestion",
						value: {
							id: question.id,
							question: question.question,
							checked: true,
							online: temp.online,
						},
					});
				}
			});
		},
		refetchOnWindowFocus: false,
		// staleTime: 10 * (60 * 1000), // 5 mins
		// cacheTime: 15 * (60 * 1000), // 10 mins
	});
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

	function handleUpdateQuetions() {
		let questionsToAdd: any[] = [];
		fields.questions.forEach((question: any) => {
			if (question.checked) {
				questionsToAdd.push({
					questionId: question.id,
					online: question.online,
				});
			}
		});
		console.log(questionsToAdd);
		QuestionAPI.addQuestionsToPartner(PartnerId, questionsToAdd)
			.then(() => {
				createAlert("success", "Exito", "Actualizado correctamente");
				console.log("done");
				// navigate(-1);
			})
			.catch((error) => {
				console.log(error);
				createAlert("error", "Error", "Hubo un error al actualizar");
			});
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className={`col-sm-12 mt-3`}>
					{data.map((question: any, index: number) => (
						<div className={`${styles.questionContainer}`} key={index}>
							<Checkbox
								label={question.id}
								checked={fields.questions[index].checked}
								function={() => dispatch({type: "editActive", value: index})}
								type="after"
							/>
							<h5>{question.question}</h5>
							<h5>{question.category}</h5>
							<Checkbox
								label="Online"
								checked={fields.questions[index].online}
								function={() => dispatch({type: "editOnline", value: index})}
								type="before"
							/>
						</div>
					))}
				</div>

				<div className="col-sm-12 mt-3">
					<Button
						text="Actualizar preguntas"
						func={handleUpdateQuetions}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
