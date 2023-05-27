import React, {useEffect, useState} from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Partners.module.css";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import {
	PartnersTable,
	QuestionsListPartnerTable,
	QuestionsListTable,
} from "components/UI/organisms";
import {QuestionAPI} from "apis/APIQuestion";

export const PartnerQuestions = () => {
	const {state} = useLocation();
	const {update} = state || handleRefresh();
	const navigate = useNavigate();
	const params = useParams();
	const PartnerId: string = String(params.partnerId);
	const [questionsIds, setQuestionsIds] = useState<any[]>([]);
	const [refresh, setRefresh] = useState(false);

	function handleRefresh() {
		//FIXME: no puedo modificar el estado ya que se genera un loop infinito de renders
		// setRefresh(true);
		return false;
	}

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`questions-partner${PartnerId}`, [refresh]],
		queryFn: () => QuestionAPI.getByPartner(PartnerId),
		onSuccess: (data) => {
			data.forEach((question: any) => {
				questionsIds.push({
					id: question.question.id,
					online: question.online,
				});
			});
		},
		refetchOnWindowFocus: true,
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

	function handleCreateQuetion() {
		navigate("create", {state: {questionsIds: questionsIds}});
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				{/* <div className="col-sm-12 mt-3">
					<h2>Socios</h2>
				</div> */}

				<div className={`col-sm-12 mt-3 tableContainer`}>
					<QuestionsListPartnerTable questions={data} />
				</div>

				<div className="col-sm-12 mt-3">
					<Button
						text="Agregar preguntas"
						func={handleCreateQuetion}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
