import React from "react";
import {
	StyledInputSubmit,
	StyledInputText,
	StyledInputRadio,
	StyledInputDate,
} from "components/UI/atoms";

import styles from "./CheckList.module.css";
import {useNavigate} from "react-router-dom";

export const CheckList = () => {
	const navigate = useNavigate();
	const [reviewType, setReviewType] = React.useState("rutine");

	const ReviewTypeChange = (value: string) => {
		setReviewType(value);
	};

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando preguntas...");
		navigate("/agent/questions/1", {replace: true});
	};

	return (
		<div className="mainContainer">
			<div className={` row`}>
				<div className="col-sm-12">
					<h1>Nueva Revisión</h1>
				</div>
				{/* Starts Form*/}
				<form className={`${styles.form} col-sm-12`} onSubmit={handleSubmit}>
					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">1. Selecciona el Socio</h6>
						<div className="row">
							<div className={styles.radioContainer}>
								<StyledInputRadio id="socio" name="socio" value="socio" />
								<label>
									<p className="p2">Socio 1</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio id="socio" name="socio" value="socio" />
								<label>
									<p className="p2">Socio 2</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio id="socio" name="socio" value="socio" />
								<label>
									<p className="p2">Socio 3</p>
								</label>
							</div>
						</div>
					</div>
					{/*Ends Row */}

					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">2. Fecha en la que se realizó</h6>
						<StyledInputDate id="start" name="trip-start" />
					</div>
					{/*Ends Row */}
					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">
							3. Selecciona la modalidad en la que se realizo
						</h6>
						<div className="row">
							<div className={styles.radioContainer}>
								<StyledInputRadio id="socio" name="type" value="socio" />
								<label>
									<p className="p2">Presencial</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio id="socio" name="type" value="socio" />
								<label>
									<p className="p2">Remoto</p>
								</label>
							</div>
						</div>
					</div>
					{/*Ends Row */}

					{/*Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">4. Selecciona el tipo de Revisión</h6>
						<div className="row">
							<div className={styles.radioContainer}>
								<StyledInputRadio
									id="socio"
									name="socio"
									value="rutine"
									checked={reviewType === "rutine"}
									onChange={() => ReviewTypeChange("rutine")}
								/>
								<label>
									<p className="p2" onClick={() => ReviewTypeChange("rutine")}>
										Rutina
									</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio
									id="socio"
									name="socio"
									value="fraud"
									checked={reviewType === "fraud"}
									onChange={() => ReviewTypeChange("fraud")}
								/>
								<label>
									<p className="p2" onClick={() => ReviewTypeChange("fraud")}>
										Fraude
									</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio
									id="socio"
									name="socio"
									value="alert"
									checked={reviewType === "alert"}
									onChange={() => ReviewTypeChange("alert")}
								/>
								<label>
									<p className="p2" onClick={() => ReviewTypeChange("alert")}>
										Alerta de Crédito
									</p>
								</label>
							</div>
						</div>
					</div>
					{/*Ends Row */}

					<div className={`row between-xs`}>
						<div className="col-sm-3">
							<StyledInputSubmit
								customType="primary"
								type="submit"
								value="Continuar"
							/>
						</div>
						<div className="col-sm-3">
							<StyledInputSubmit
								customType="secondary"
								type="submit"
								value="Cancelar"
							/>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</form>
				{/* Close Form*/}
			</div>
		</div>
	);
};
