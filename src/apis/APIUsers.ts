import {stringify} from "querystring";
import {api, API_ROUTE} from "./axiosConfig";

export const UserAPI = {
	getAll: async function () {
		return api
			.request({
				url: `/user`,
				method: "GET",
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				// console.log("Hubo un error");
				if (error.response) {
					// console.log(error.response.data);
					throw new Error(error.response.data.message);
				}
				throw new Error(error);
			});
	},
	create: async function (data: any) {
		return api
			.request({
				url: `/user`,
				method: "POST",
				data: data,
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				// console.log("Hubo un error");
				if (error.response) {
					// console.log(error.response.data);
					throw new Error(error.response.data.message);
				}
				throw new Error(error);
			});
	},
};
