import React from "react";

import {PartnerCard} from "components/UI/molecules";
import {Button} from "components/UI/atoms";

import styles from "./Partners.module.css";
import {useNavigate} from "react-router-dom";

export const Partners = () => {
	const navigate = useNavigate();

	function handleCreateAgent() {
		navigate("create");
	}

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className={`${styles.agentsContainer}`}>
					<PartnerCard />
					<PartnerCard />
					<PartnerCard />
					<PartnerCard />
					<PartnerCard />
					<PartnerCard />
				</div>
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
