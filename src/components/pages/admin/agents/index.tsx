import React from "react";

import {AgentCard} from "components/UI/molecules";
import {Button} from "components/UI/atoms";

import styles from "./Agents.module.css";
import {useNavigate} from "react-router-dom";

export const Agents = () => {
	const navigate = useNavigate();

	function handleCreateAgent() {
		navigate("create");
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className={`${styles.agentsContainer}`}>
					<AgentCard />
					<AgentCard />
					<AgentCard />
					<AgentCard />
					<AgentCard />
					<AgentCard />
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
