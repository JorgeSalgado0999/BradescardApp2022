import {Question} from "./Question";

export interface Store {
	id: number;
	name: string;
	active: boolean;
	partnerId: number;
	questions?: Question[];

	createdAt?: Date;
	updatedAt?: Date;
}
