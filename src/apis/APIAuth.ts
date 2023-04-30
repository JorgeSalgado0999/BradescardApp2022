import {stringify} from "querystring";
import {api, API_ROUTE} from "./axiosConfig";

export const AuthAPI = {
	logIn: async function (data: any) {
		return api
			.request({
				url: `/auth`,
				method: "POST",
				data: data,
			})
			.then((response) => {
				return response.data.data;
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
	verfifyUser: async function () {
		return api
			.request({
				url: `/user/${localStorage.getItem("id")}`,
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				return response.data;
			})
			.catch((error: any) => {
				// console.log("Hubo un error");
				if (error.response) {
					// console.log(error.response.data);
					throw new Error(JSON.stringify(error.response.data));
				}
				throw new Error(error);
			});
	},
};
