import {Component, OnInit} from '@angular/core';
import {PresentMember} from '../model/PresentMember';
import {PresenceService} from '../service/presence.service';

@Component({
	selector: 'mycfhn-presence-dashboard',
	templateUrl: './presence-dashboard.component.html',
	styleUrls: ['./presence-dashboard.component.css']
})
export class PresenceDashboardComponent implements OnInit {

	public members: PresentMember[] = [];
	public loading: boolean = true;
	private premiumMembers = [
		'LeoDJ', 'patrick246', 'FranzImsch', 'patagona', 'harmoniemand', 'nickvergessen', 'nitegate'
	];

	constructor(private presence: PresenceService) {
	}

	ngOnInit() {
		this.reload();
	}

	public reload(): void {
		this.loading = true;
		this.presence.getPresentMembers()
			.subscribe(members => {
				this.members = members;
				this.loading = false;
				console.log(this.members);
			});
	}

	public isPremium(username: string) {
		return this.premiumMembers.includes(username);
	}

}
