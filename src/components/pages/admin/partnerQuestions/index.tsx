import React from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Partners.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import {PartnersTable, QuestionsListTable} from "components/UI/organisms";
import {QuestionAPI} from "apis/APIQuestion";

export const PartnerQuestions = () => {
	const navigate = useNavigate();
	const params = useParams();
	const PartnerId: string = String(params.partnerId);

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`questions-partner${PartnerId}`, []],
		queryFn: () => QuestionAPI.getAll(),
		onSuccess: (data) => {},
		staleTime: 10 * (60 * 1000), // 5 mins
		cacheTime: 15 * (60 * 1000), // 10 mins
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
		navigate("create");
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				{/* <div className="col-sm-12 mt-3">
					<h2>Socios</h2>
				</div> */}

				<div className="col-sm-12 mt-3">
					<QuestionsListTable questions={data} />
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
