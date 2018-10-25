import {Component, OnInit} from '@angular/core';
import {MemberdataService} from '../service/memberdata.service';
import {Member} from '../service/Member';

@Component({
	selector: 'app-member-list-page',
	templateUrl: './member-list-page.component.html',
	styleUrls: ['./member-list-page.component.css']
})
export class MemberListPageComponent implements OnInit {

	public members: Member[] = [];
	public viewtype: 'table' | 'cards' = 'table';

	constructor(private memberdataService: MemberdataService) {
	}

	ngOnInit() {
		this.loadMembers();
	}

	loadMembers() {
		this.memberdataService.getMembers().subscribe(members => this.members = members);
	}

}
