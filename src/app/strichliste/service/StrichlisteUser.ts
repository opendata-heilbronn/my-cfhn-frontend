export interface StrichlisteUser {
	id: string;
	username: string;
	cfhn: boolean;
	outstandingBalance: number;
	consumption: {
		[productId: string]: number
	}
}
