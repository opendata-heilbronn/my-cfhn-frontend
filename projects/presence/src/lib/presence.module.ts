import {NgModule} from '@angular/core';
import {PresenceDashboardComponent} from './presence-dashboard/presence-dashboard.component';
import {DASHBOARD_ENTRIES} from 'dashboard';
import {PresenceDashboardEntry} from './PresenceDashboardEntry';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule
	],
	declarations: [PresenceDashboardComponent],
	exports: [PresenceDashboardComponent],
	providers: [{provide: DASHBOARD_ENTRIES, useClass: PresenceDashboardEntry, multi: true}],
	entryComponents: [
		PresenceDashboardComponent
	]
})
export class PresenceModule {
}
