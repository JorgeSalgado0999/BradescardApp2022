export interface PartnerRowProps {
	id: string;
	slug: string;
	name: string;
	state: string;
	manager: string;
	phone: string;
	email: string;
	active: boolean;
	businessName: string;
}
export interface UserRowProps {
	id: string;
	slug: string;
	name: string;
	state: string;
	manager: string;
	phone: string;
	email: string;
	active: boolean;
	businessName: string;
}
export interface StoreRowProps {
	id: string;
	slug: string;
	name: string;
	state: string;
	manager: string;
	phone: string;
	email: string;
	active: boolean;
	businessName: string;
}

export interface QuestionRowProps {
	id: string;
	riskLevel: string;
	active: boolean;
	category: string;
	question: string;
}
export interface QuestionPartnerRowProps {
	id: string;
	active: boolean;
	category: string;
	question: string;
	online: boolean;
}
