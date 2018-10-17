import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {DashboardHostDirective} from './dashboard-host/dashboard-host.directive';
import {DashboardEntryComponent} from './dashboard-entry/dashboard-entry.component';
import {AuthenticationGuard} from '../authentication/guard/authentication.guard';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'dashboard',
			component: DashboardComponent,
			data: {
				include: true,
				name: "Dashboard",
			},
			canActivate: [AuthenticationGuard]
		}]),
		CommonModule
	],
	declarations: [DashboardComponent, DashboardHostDirective, DashboardEntryComponent],
	exports: [DashboardComponent]
})
export class DashboardModule {
}
