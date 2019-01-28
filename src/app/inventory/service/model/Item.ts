import {Place} from './Place';

export interface Item {
	id: number;
	name: string;
	model: string;
	serial: string;
	place: Place;
	notes: string;
	stickerPresent: boolean;

}
