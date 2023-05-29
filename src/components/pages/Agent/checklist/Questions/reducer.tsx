import {QuestionInterface} from "models/appTypes/Question";
import {type} from "os";

type Action =
	| {type: "index"; value: number}
	| {type: "questionIndex"; value: number}
	| {type: "partnerId"; value: number}
	| {type: "storeId"; value: number}
	| {type: "date"; value: Date}
	| {type: "startTime"; value: string}
	| {type: "endTime"; value: string}
	| {type: "contactName"; value: string}
	| {type: "online"; value: boolean}
	| {type: "type"; value: string}
	| {type: "createQuestion"; value: QuestionInterface}
	| {type: "editQuestion"; value: editQuestion};

interface QuestionsReducer {
	partnerId: number;
	storeId: number;
	date: Date;
	startTime: string;
	endTime: string;
	contactName: string;
	online: boolean;
	type: string;
	index: number;
	questionIndex: number;
	Questions: QuestionInterface[];
}
interface editQuestion {
	index: number;
	field: string;
	data: any;
}

const initial: QuestionsReducer = {
	partnerId: 0,
	storeId: 0,
	date: new Date(),
	startTime: "",
	endTime: "",
	contactName: "",
	online: false,
	type: "",
	index: 0,
	questionIndex: 0,
	Questions: [],
};

function reducer(state: QuestionsReducer, action: Action): QuestionsReducer {
	switch (action.type) {
		case "index":
			return {...state, index: action.value};
		// case "category":
		// 	return {...state, category: action.value};
		case "questionIndex":
			return {...state, questionIndex: action.value};
		case "partnerId":
			return {...state, partnerId: action.value};
		case "storeId":
			return {...state, storeId: action.value};
		case "date":
			return {...state, date: action.value};
		case "startTime":
			return {...state, startTime: action.value};
		case "endTime":
			return {...state, endTime: action.value};
		case "contactName":
			return {...state, contactName: action.value};
		case "online":
			return {...state, online: action.value};
		case "type":
			return {...state, type: action.value};

		case "createQuestion":
			// console.log("Creando pregunta");
			// console.log(action.value);
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
