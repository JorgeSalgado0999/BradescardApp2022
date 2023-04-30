import {api, API_ROUTE} from "./axiosConfig";

export const StoreAPI = {
	getAll: async function (partnerId: string) {
		console.log("get stores");
		return api
			.request({
				url: `/store/?partnerId=${partnerId}`,
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
		console.log("create store");
		return api
			.request({
				url: `/store/`,
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
