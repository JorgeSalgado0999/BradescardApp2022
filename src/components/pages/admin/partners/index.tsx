import React from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Partners.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import {PartnersTable} from "components/UI/organisms";

export const Partners = () => {
	const navigate = useNavigate();

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`partners`, []],
		queryFn: () => PartnerAPI.getAll(),
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

	function handleCreateAgent() {
		navigate("create");
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				{/* <div className="col-sm-12 mt-3">
					<h2>Socios</h2>
				</div> */}

				<div className="col-sm-12 mt-3">
					<PartnersTable partners={data} />
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
						text="Crear nuevo Socio"
						func={handleCreateAgent}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
