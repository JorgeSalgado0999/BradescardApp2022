import {api, API_ROUTE} from "./axiosConfig";
import {Partner} from "models";

export const ReviewAPI = {
	getAll: async function () {
		console.log("get all reviews");
		return api
			.request({
				url: `/review/`,
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
	create: async function (data: any, rating: number) {
		console.log("create partner");
		return api
			.request({
				url: `/review/`,
				method: "POST",
				data: {
					data: {
						PartnerId: data.partnerId,
						StoreId: data.storeId,
						contactName: data.contactName,
						date: data.date,
						startTime: data.startTime,
						endTime: data.endTime,
						online: data.online,
						type: data.type,
						rating: rating,
						questions: data.Questions,
					},
				},
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
	getQuestionsReview: async function (partnerId: string, online: boolean) {
		console.log("get questions for review");
		return api
			.request({
				url: `/review/questions/?partnerId=${partnerId}&online=${online}`,
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
