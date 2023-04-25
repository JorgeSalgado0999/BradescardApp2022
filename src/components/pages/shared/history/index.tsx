import {
	StyledInputDate,
	StyledSelect,
	StyledInputSubmit,
} from "components/UI/atoms";
import {CardReview} from "components/UI/molecules";
import React from "react";
import styles from "./History.module.css";

export const History = () => {
	const [title, setTitle] = React.useState("Ultimas 7 revisiones");

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("buscando...");
	};

	return (
		<div className="mainContainer">
			<div className={`row mb-3`}>
				<div className="col-sm-12">
					<h1>Historico de revisiones</h1>
				</div>
			</div>

			<form className="row mb-3  middle-xs" onSubmit={handleSubmit}>
				<StyledSelect customType="primary" className={styles.historySelect}>
					<option value="socio" disabled>
						-- Selecciona el Socio --
					</option>
					<option value="socio">Socio 1</option>
					<option value="socio">Socio 2</option>
					<option value="socio">Socio 3</option>
				</StyledSelect>

				<StyledSelect customType="primary" className={styles.historySelect}>
					<option value="socio" disabled>
						-- Selecciona el tipo --
					</option>
					<option value="socio">Rutina</option>
					<option value="socio">Fraude</option>
					<option value="socio">Alerta</option>
				</StyledSelect>

				<StyledSelect customType="primary" className={styles.historySelect}>
					<option value="socio" disabled>
						-- Selecciona Tiempo --
					</option>
					<option value="socio">Semana Pasada</option>
					<option value="socio">Ultimo Mes</option>
					<option value="socio">Ultimos 3 meses</option>
					<option value="socio">Todo el Año</option>
				</StyledSelect>

				<div className={styles.submitButton}>
					<StyledInputSubmit
						value="Buscar"
						customType="primary"
						type="submit"
					/>
				</div>
			</form>

			<div className={`row mb-3`}>
				<div className="col-sm-12">
					<h1>{title}</h1>
					<div className={`${styles.reviews} row`}>
						<CardReview />
						<CardReview />
						<CardReview />
					</div>
				</div>
			</div>

			{/* Cierre final */}
		</div>
	);
};
