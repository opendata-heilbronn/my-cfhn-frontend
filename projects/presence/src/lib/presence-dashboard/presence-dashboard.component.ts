import {Component, OnInit} from '@angular/core';
import {PresentMember} from '../PresentMember';
import {PresenceService} from '../presence.service';

@Component({
	selector: 'mycfhn-presence-dashboard',
	templateUrl: './presence-dashboard.component.html',
	styleUrls: ['./presence-dashboard.component.css']
})
export class PresenceDashboardComponent implements OnInit {

	public members: PresentMember[];

	constructor(private presence: PresenceService) {
	}

	ngOnInit() {
		this.presence.getPresentMembers()
			.subscribe(members => {
				this.members = members;
				console.log(this.members);
			});
	}

}
