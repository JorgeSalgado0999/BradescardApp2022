import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {StyledInputSubmit} from "components/UI/atoms";

export const Questions = () => {
	const navigate = useNavigate();
	let {page} = useParams();
	let num = parseInt(page!);
	var data = require("assets/checklist.json");
	var nose = "page" + page;
	const dataPage = data[nose];
	//console.log(dataPage);

	function change() {
		console.log(page);
		navigate(`/agent/questions/${num + 1}`, {replace: true});
	}

	/* test */
	const [inputFields, setInputFields] = useState(dataPage);
	const handleFormChange = (index: any, event: any) => {
		let data: any[] = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};
	const addFields = () => {
		let newfield = {name: "", age: ""};
		setInputFields([...inputFields, newfield]);
	};
	const submit = (e: any) => {
		e.preventDefault();
		console.log(inputFields);
	};

	return (
		<div>
			<h1>Questions</h1>
			<h3>Page: {page}</h3>
			{/* 
			{dataPage.map((question: any) => (
				<div key={question}>
					<label htmlFor="">{question.question}</label>
					<br />
					<input name="name" placeholder="Name" value="" />
					<br />
					<br />
				</div>
			))}
			*/}
			<form onSubmit={submit}>
				{inputFields.map((input: any, index: any) => {
					return (
						<div key={index}>
							<input
								name="name"
								placeholder="Name"
								value={input.name}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								name="age"
								placeholder="Age"
								value={input.age}
								onChange={(event) => handleFormChange(index, event)}
							/>
						</div>
					);
				})}
				<button onClick={change}> Siguiente</button>
				<br />
				<button onClick={addFields}>Add More..</button>
				<br />
				<StyledInputSubmit
					customType="primary"
					type="submit"
					value="Continuar"
				/>
			</form>
		</div>
	);
};
