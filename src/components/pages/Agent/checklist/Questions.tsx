import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
	StyledInputDate,
	StyledInputSubmit,
	StyledInputText,
} from "components/UI/atoms";

export const Questions = () => {
	const navigate = useNavigate();
	let {page} = useParams();
	let num = parseInt(page!);
	let data = require("assets/checklist.json");
	let actualPage = "page" + page;
	let dataPage = data[actualPage];

	useEffect(() => {
		console.log("render...");
		actualPage = "page" + page;
		dataPage = data[actualPage];
		setInputFields(dataPage);
	}, [page]);

	/* test */
	const [inputFields, setInputFields] = useState(dataPage);

	const handleFormChange = (index: any, event: any) => {
		console.log("entra");
		let data: any[] = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const submit = (e: any) => {
		e.preventDefault();
		console.log(inputFields);
		//console.log(dataPage);

		navigate(`/agent/questions/${num + 1}`, {replace: true});
	};

	return (
		<div>
			<h1>Questions</h1>
			<h3>Page: {page}</h3>
			<form onSubmit={submit}>
				{inputFields.map((input: any, index: any) => {
					return (
						<div key={index} className="row mb-3">
							<h1>{input.question}</h1>
							<input
								name="answ1"
								placeholder="anws1"
								value={input.answ1}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="answ2"
								placeholder="anws2"
								value={input.answ2}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="answ3"
								placeholder="anws3"
								value={input.answ3}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="answ4"
								placeholder="anws4"
								value={input.answ4}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="answ5"
								placeholder="anws5"
								value={input.answ5}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="answ6"
								placeholder="anws6"
								value={input.answ6}
								onChange={(event) => handleFormChange(index, event)}
							/>
						</div>
					);
				})}
				<StyledInputSubmit
					customType="primary"
					type="submit"
					value="Continuar"
				/>
			</form>
		</div>
	);
};
