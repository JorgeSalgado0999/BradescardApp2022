import React from "react";
import {
	StyledInputSubmit,
	StyledInputText,
	StyledInputRadio,
	StyledInputDate,
	Loader,
} from "components/UI/atoms";

import styles from "./CheckList.module.css";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";

export const CheckList = () => {
	const navigate = useNavigate();
	const [partnerReview, setPartnerReview] = React.useState("");
	const [date, setDate] = React.useState("");
	const [online, setOnline] = React.useState("");
	const [reviewType, setReviewType] = React.useState("rutine");

	const {isLoading, data, isError, error} = useQuery({
		queryKey: [`partners`, []],
		queryFn: () => PartnerAPI.getAll(),
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

	const ReviewTypeChange = (value: string) => {
		setReviewType(value);
	};
	const PartnerChange = (value: string) => {
		setPartnerReview(value);
	};
	const OnlineChange = (value: string) => {
		setOnline(value);
	};

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando preguntas...");
		navigate(
			`/agent/questions/?partnerId=${partnerReview}&date=${date}&online=${online}&type=${reviewType}`,
			{replace: true}
		);
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
							{data?.map((partner: any) => (
								<div className={styles.radioContainer} key={partner.id}>
									<StyledInputRadio
										name="partner"
										value={partner.slug}
										checked={partnerReview === partner.slug}
										onChange={() => PartnerChange(partner.slug)}
									/>
									<label onClick={() => PartnerChange(partner.slug)}>
										<p className="p2">{partner.name}</p>
									</label>
								</div>
							))}
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
								<StyledInputRadio
									name="online"
									value="0"
									checked={online === "0"}
									onChange={() => OnlineChange("0")}
								/>
								<label onClick={() => OnlineChange("0")}>
									<p className="p2">Presencial</p>
								</label>
							</div>

							<div className={styles.radioContainer}>
								<StyledInputRadio
									name="online"
									value="1"
									checked={online === "1"}
									onChange={() => OnlineChange("1")}
								/>
								<label onClick={() => OnlineChange("1")}>
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
									name="type"
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
									name="type"
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
									name="type"
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
