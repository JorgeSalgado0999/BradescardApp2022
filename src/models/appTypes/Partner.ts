import {Store} from "./Store";

export interface Partner {
	id: number;
	name: string;
	active: boolean;
	stores?: Store[];

	createdAt?: Date;
	updatedAt?: Date;
}
