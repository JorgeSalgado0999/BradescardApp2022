import React from "react";
import {
	StyledInputSubmit,
	StyledInputText,
	StyledInputRadio,
	StyledInputDate,
	Loader,
	StyledSelect,
	Input,
	StyledMaterialInput,
	StyledInputTime,
} from "components/UI/atoms";

import styles from "./CheckList.module.css";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {PartnerAPI} from "apis/APIPartners";
import {StoreAPI} from "apis/APIStores";

export const CheckList = () => {
	const navigate = useNavigate();
	const [stores, setStores] = React.useState<any[]>([]);
	//fields for the review
	const [partnerReview, setPartnerReview] = React.useState("");
	const [selectedStore, setSelectedStore] = React.useState<any>("");
	const [contactName, setContactName] = React.useState("");
	const [date, setDate] = React.useState("");
	const [startTime, setStartTime] = React.useState("");
	const [endTime, setEndTime] = React.useState("");
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
		setSelectedStore("");
		getStores(value);
	};
	const OnlineChange = (value: string) => {
		setOnline(value);
	};

	const getStores = (partnerId: string) => {
		StoreAPI.getAll(partnerId).then((data) => {
			setStores(data);
		});
	};

	const handleSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		console.log("iniciando preguntas...");
		navigate(
			`/agent/questions/?partnerId=${partnerReview}&storeId=${selectedStore}&contactName=${contactName}&date=${date}&startTime=${startTime}&endTime=${endTime}&online=${online}&type=${reviewType}`,
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
										value={partner.id}
										checked={partnerReview === partner.id}
										onChange={() => PartnerChange(partner.id)}
									/>
									<label
										className="pointer"
										onClick={() => PartnerChange(partner.id)}
									>
										<p className="p2">{partner.name}</p>
									</label>
								</div>
							))}
						</div>
					</div>
					{/*Ends Row */}
					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">2.Selecciona la tienda</h6>
						<div className="col-md-4">
							<StyledSelect
								customType="secondary"
								value={selectedStore}
								onChange={(e) => setSelectedStore(e.target.value)}
							>
								<option value="" disabled>
									*-- Tienda --
								</option>
								{stores.map((store) => (
									<option key={store.id} value={store.id}>
										{store.name}
									</option>
								))}
							</StyledSelect>
						</div>
					</div>
					{/*Ends Row */}

					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">3. Contacto de la tienda</h6>
						<div className="col-md-4">
							<StyledMaterialInput
								customType="p"
								placeholder="Nombre"
								onChange={(e: any) => setContactName(e.target.value)}
							/>
						</div>
					</div>
					{/*Ends Row */}

					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">4. Fecha en la que se realizó</h6>
						<StyledInputDate
							id="start"
							name="trip-start"
							onChange={(e: any) => {
								setDate(e.target.value);
							}}
						/>
					</div>
					{/*Ends Row */}
					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">5. Horario en el que se realizó</h6>
						<div className={`${styles.timeSelect}`}>
							<p className="p mr-1"> Inicio: </p>
							<StyledInputTime
								type="time"
								name=""
								onChange={(e: any) => {
									setStartTime(e.target.value);
								}}
							></StyledInputTime>
							<p className="p ml-3 mr-1">Fin: </p>
							<StyledInputTime
								type="time"
								name=""
								onChange={(e: any) => {
									setEndTime(e.target.value);
								}}
							></StyledInputTime>
						</div>
					</div>
					{/*Ends Row */}

					{/* Starts Row */}
					<div className={`${styles.question} row`}>
						<h6 className="text-bold">
							6. Selecciona la modalidad en la que se realizo
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
						<h6 className="text-bold">7. Selecciona el tipo de Revisión</h6>
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
