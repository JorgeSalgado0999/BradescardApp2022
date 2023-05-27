import React from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Partners.module.css";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {QuestionAPI} from "apis/APIQuestion";
import {PartnersTable} from "components/UI/organisms";
import {QuestionsListTable} from "components/UI/organisms/";

export const QuestionsList = () => {
	const navigate = useNavigate();

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`questions`, []],
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

				<div className="col-sm-12 mt-3 tableContainer">
					<QuestionsListTable questions={data} />
				</div>

				{/* <div className="col-sm-12 mt-3">
					<div className={`${styles.agentsContainer}`}>
						{data?.map((partner: any) => (
							<PartnerCard
								key={partner.id}
								partner={partner.name}
								stores={partner.stores}
								active={partner.active}
								id={partner.id}
							/>
						))}
					</div>
				</div> */}

				<div className="col-sm-12 mt-3">
					<Button
						text="Crear nueva pregunta"
						func={handleCreateQuetion}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
