import {Question} from "models/appTypes/Question";

type Action =
	| {type: "index"; value: number}
	| {type: "createQuestion"; value: Question}
	| {type: "editQuestion"; value: editQuestion};

interface QuestionsReducer {
	index: number;
	Questions: Question[];
}
interface editQuestion {
	index: number;
	field: string;
	data: any;
}

const initial: QuestionsReducer = {
	index: 0,
	Questions: [],
};

function reducer(state: QuestionsReducer, action: Action): QuestionsReducer {
	switch (action.type) {
		case "index":
			return {...state, index: action.value};
		case "createQuestion":
			return {...state, Questions: [...state.Questions, action.value]};
		case "editQuestion":
			//Todo: terminar método
			let globalQuestions = state.Questions;
			let index = action.value.index;
			let field = action.value.field;
			let data = action.value.data;

			return {...state, Questions: [...state.Questions]};
		default:
			return state;
	}
}

export {reducer, initial};
