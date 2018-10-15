import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { DashboardHostDirective } from './dashboard-host.directive';
import { DashboardEntryComponent } from './dashboard-entry/dashboard-entry.component';
import {BrowserModule} from '@angular/platform-browser';
import {AuthenticationGuard} from 'authentication';

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
		BrowserModule
	],
	declarations: [DashboardComponent, DashboardHostDirective, DashboardEntryComponent],
	exports: [DashboardComponent]
})
export class DashboardModule {
}
