export interface Member {
	id: string;
	username: string;
	birthday: string;
	fullName: string;
	mail: string;
	entryDate: string;
	phone: string;
	address: string;
	memberType: 'ACTIVE_MEMBER' | 'PASSIVE_MEMBER' | 'CORPORATE_MEMBER' | 'RETIRED_MEMBER',
	boardMember: boolean;
	admin: boolean;
	techUser: boolean;
}
