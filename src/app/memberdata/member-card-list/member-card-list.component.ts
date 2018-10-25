import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../service/Member';

@Component({
	selector: 'app-member-card-list',
	templateUrl: './member-card-list.component.html',
	styleUrls: ['./member-card-list.component.css']
})
export class MemberCardListComponent implements OnInit {

	@Input() public members: Member[];

	constructor() {
	}

	ngOnInit() {
	}

	public getProfilePicture(username: string) {
		return `https://memberdata.my.cfhn.it/user/${username}/picture`;
	}
}
