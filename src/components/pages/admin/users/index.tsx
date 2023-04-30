import React from "react";

import {AgentCard} from "components/UI/molecules";
import {Button, Loader} from "components/UI/atoms";

import styles from "./Users.module.css";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {UsersTable} from "components/UI/organisms";
import {UserAPI} from "apis/APIUsers";

export const Users = () => {
	const navigate = useNavigate();

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`users`, []],
		queryFn: () => UserAPI.getAll(),
		onSuccess: (data) => {
			console.log(data);
		},
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
				<div className="col-sm-12 mt-3">
					<UsersTable users={data.users} />
				</div>

				<div className="col-sm-12 mt-3">
					<Button
						text="Crear nuevo Agente"
						func={handleCreateAgent}
						full={true}
					/>
				</div>
			</div>
		</div>
	);
};
