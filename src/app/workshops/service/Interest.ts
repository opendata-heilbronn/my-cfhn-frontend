export interface Interest {
	id: string;
	date: string;
	topic: string;
	supporters: Supporter[]
}

export interface Supporter {
	username: string;
	displayName: string;
	validated: boolean;
}
