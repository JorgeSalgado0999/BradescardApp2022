import {api, API_ROUTE} from "./axiosConfig";
import {Partner} from "models";

export const QuestionAPI = {
	getAll: async function () {
		console.log("get all questions");
		return api
			.request({
				url: `/question/`,
				method: "GET",
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	getByCategory: async function () {
		console.log("get questions by category");
		return api
			.request({
				url: `/question/by-category`,
				method: "GET",
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	create: async function (data: any) {
		console.log("create question");
		return api
			.request({
				url: `/question/`,
				method: "POST",
				data: data,
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
	getCategories: async function () {
		console.log("get categories");
		return api
			.request({
				url: `/question-category`,
				method: "GET",
			})
			.then((response) => {
				return response.data.data;
			})
			.catch((error: any) => {
				console.log("Hubo un error");
				if (error.response) {
					console.log(error.response.data);
				}
				throw new Error(error);
			});
	},
};
