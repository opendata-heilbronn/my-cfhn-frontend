import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../service/Member';

@Component({
	selector: 'app-member-table-list',
	templateUrl: './member-table-list.component.html',
	styleUrls: ['./member-table-list.component.css']
})
export class MemberTableListComponent implements OnInit {

	@Input() public members: Member[];
	public sortedBy: keyof Member;
	public ascending: boolean = true;

	constructor() {
	}

	ngOnInit() {
	}

	public sortBy(sortBy: {keyName: keyof Member, ascending: boolean}) {
		this.sortedBy = sortBy.keyName;
		const ascending = sortBy.ascending;
		this.members.sort((m1, m2) => {
			if (!ascending) {
				let temp = m1;
				m1 = m2;
				m2 = temp;
			}
			if (m1 === null || m2 === null) {
				return 0;
			}
			return (m1[this.sortedBy] as string).localeCompare((m2[this.sortedBy] as string));
		});
	}

	public getAge(birthday: string) {
		return new Date(Date.now() - new Date(birthday).getTime()).getUTCFullYear() - 1970
	}
}
