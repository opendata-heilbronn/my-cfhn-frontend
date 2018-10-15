import {Component, OnInit} from '@angular/core';
import {PresenceService} from '../presence.service';

@Component({
	selector: 'mycfhn-presence-page',
	templateUrl: './presence-page.component.html',
	styleUrls: ['./presence-page.component.css']
})
export class PresencePageComponent implements OnInit {

	public macs: string[] = [];
	public mac: string = "";

	constructor(private presenceService: PresenceService) {
	}

	ngOnInit() {
		this.presenceService.getMyRegisteredMacs()
			.subscribe(macs => this.macs = macs);
	}

	addMac() {
		console.log(this.macs, this.mac);
		const mac = this.mac.toLocaleLowerCase().replace(/-/, ':');
		this.macs.push(mac);
		console.log(this.macs, this.mac);
		this.presenceService.setRegisteredMacs(this.macs)
			.subscribe(macs => this.macs = macs);
	}

	deleteMac(mac: string) {
		this.macs.splice(this.macs.indexOf(mac), 1);
		this.presenceService.setRegisteredMacs(this.macs)
			.subscribe(macs => this.macs = macs);
	}

}
