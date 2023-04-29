import {api, API_ROUTE} from "./axiosConfig";
import {Partner} from "models";

export const PartnerAPI = {
	getAll: async function () {
		console.log("get partners");
		return api
			.request({
				url: `/partner/`,
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
		console.log("create partner");
		return api
			.request({
				url: `/partner/`,
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
};
