interface PartnerQuestion {
	id: number;
	question: string;
	checked: boolean;
	online: boolean;
}

type Action =
	| {type: "createQuestion"; value: PartnerQuestion}
	| {type: "editOnline"; value: number}
	| {type: "editActive"; value: number};

interface QuestionsReducer {
	questions: PartnerQuestion[];
}
interface editQuestion {
	index: number;
	field: string;
	data: any;
}

const initial: QuestionsReducer = {
	questions: [],
};

function reducer(state: QuestionsReducer, action: Action): QuestionsReducer {
	switch (action.type) {
		case "createQuestion":
			// console.log("Creando pregunta"const [fields, dispatch] = useReducer(reducer, initial););
			console.log(action.value);
			return {...state, questions: [...state.questions, action.value]};

		case "editOnline":
			//Copilot Method
			const temp = state.questions[action.value];
			temp.online = !temp.online;
			return {
				...state,
				questions: [
					...state.questions.slice(0, action.value),
					temp,
					...state.questions.slice(action.value + 1),
				],
			};

		case "editActive":
			// Personal Method
			let allQuestions = state.questions;
			allQuestions[action.value].checked = !allQuestions[action.value].checked;
			return {questions: allQuestions};

		default:
			return state;
	}
}

export {reducer, initial};
