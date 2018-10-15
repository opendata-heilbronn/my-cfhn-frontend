import {Component, Inject, OnInit} from '@angular/core';
import {DASHBOARD_ENTRIES, DashboardEntry} from '../DashboardEntry';

@Component({
	selector: 'lib-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(@Inject(DASHBOARD_ENTRIES) public dashboards: DashboardEntry[]) {
		console.log(dashboards);
	}

	ngOnInit() {
	}

}
