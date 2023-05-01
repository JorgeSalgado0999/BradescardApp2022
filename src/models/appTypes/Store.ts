import {QuestionInterface} from "./Question";

export interface Store {
	id: number;
	name: string;
	active: boolean;
	partnerId: number;
	questions?: QuestionInterface[];

	createdAt?: Date;
	updatedAt?: Date;
}
