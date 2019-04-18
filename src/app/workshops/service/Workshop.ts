import {Interest} from './Interest';

export interface Workshop {
	id: string;
	topic: string;
	description: string;
	finalDate: string;
	possibleDates: { [date: string]: Attendance[] };
	organizer: Organizer;
	basedOn: Interest;
}

export interface Attendance {
	username: string;
	displayName: string;
	validated: boolean;
}

export interface Organizer {
	username: string;
	displayName: string;
}

export interface WorkshopCreateModel {
	topic: string;
	description: string;
	possibleDates: string[];
	basedOnInterest: string;
}
