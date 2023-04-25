export interface Category {
	id: number;
	category: string;
}

export interface Answer {
	id?: number;
	questionId: number;
	status: string;
	comments: string;
	plan: string;
	date: Date;
	breach: string;
}

export interface Question {
	id: number;
	question: string;
	category: Category;
	answer: Answer;
}
