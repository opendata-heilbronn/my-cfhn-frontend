import {NgModule} from '@angular/core';
import {PresenceDashboardComponent} from './presence-dashboard/presence-dashboard.component';
import {DASHBOARD_ENTRIES} from 'dashboard';
import {PresenceDashboardEntry} from './PresenceDashboardEntry';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { PresencePageComponent } from './presence-page/presence-page.component';
import {RouterModule} from '@angular/router';
import {AuthenticationGuard} from 'authentication';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forChild([
			{
				path: 'presence',
				component: PresencePageComponent,
				data: {
					include: true,
					name: 'Anwesenheit'
				},
				canActivate: [AuthenticationGuard]
			}
		]),
		FormsModule
	],
	declarations: [PresenceDashboardComponent, PresencePageComponent],
	exports: [PresenceDashboardComponent],
	providers: [{provide: DASHBOARD_ENTRIES, useClass: PresenceDashboardEntry, multi: true}],
	entryComponents: [
		PresenceDashboardComponent
	]
})
export class PresenceModule {
}
