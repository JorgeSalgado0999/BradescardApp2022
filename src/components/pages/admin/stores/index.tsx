import React from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Stores.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {StoresTable} from "components/UI/organisms";
import {StoreAPI} from "apis/APIStores";

export const Stores = () => {
	const navigate = useNavigate();
	const params = useParams();
	const PartnerId: string = String(params.partnerId);

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`stores-${PartnerId}`, []],
		queryFn: () => StoreAPI.getAll(PartnerId),
		onSuccess: (data) => {},
		staleTime: 10 * (60 * 1000), // 5 mins
		cacheTime: 15 * (60 * 1000), // 10 mins
	});
	if (isLoading) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<Loader />
				</div>
			</div>
		);
	}
	if (isError) {
		return (
			<div className="row">
				<div className={`col-xs-12 loaderContainer`}>
					<h2>Hubo un Error</h2>
				</div>
			</div>
		);
	}

	function handleCreateAgent() {
		navigate("create");
	}

	return (
		<div className="mainContainer">
			<div className="col-sm-12 mt-3">
				<StoresTable stores={data} />
			</div>

			<div className="col-sm-12 mt-3">
				<Button
					text="Crear nueva tienda"
					func={handleCreateAgent}
					full={true}
				/>
			</div>
		</div>
	);
};
