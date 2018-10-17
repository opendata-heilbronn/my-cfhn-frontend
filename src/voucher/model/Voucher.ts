export interface Voucher {
	token: string;
	mail: string;
	entryDate: string;
	memberType: 'ACTIVE_MEMBER' | 'PASSIVE_MEMBER' | 'CORPORATE_MEMBER';
}
