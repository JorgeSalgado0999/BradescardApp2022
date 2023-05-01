import {QuestionInterface} from "models/appTypes/Question";

type Action =
	| {type: "index"; value: number}
	| {type: "category"; value: number}
	| {type: "createQuestion"; value: QuestionInterface}
	| {type: "editQuestion"; value: editQuestion};

interface QuestionsReducer {
	index: number;
	category: number;
	Questions: QuestionInterface[];
}
interface editQuestion {
	index: number;
	field: string;
	data: any;
}

const initial: QuestionsReducer = {
	index: 0,
	category: 0,
	Questions: [],
};

function reducer(state: QuestionsReducer, action: Action): QuestionsReducer {
	switch (action.type) {
		case "index":
			return {...state, index: action.value};
		case "category":
			return {...state, category: action.value};

		case "createQuestion":
			// console.log("Creando pregunta");
			console.log(action.value);
			return {...state, Questions: [...state.Questions, action.value]};

		case "editQuestion":
			//Todo: terminar método
			console.log("editando pregunta");
			let globalQuestions: any = state.Questions;
			let index: any = action.value.index;
			let field: any = action.value.field;
			let data: any = action.value.data;

			globalQuestions[index].answer[field] = data;

			return {...state, Questions: globalQuestions};
		default:
			return state;
	}
}

export {reducer, initial};
