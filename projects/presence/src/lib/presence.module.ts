import {NgModule} from '@angular/core';
import {PresenceDashboardComponent} from './presence-dashboard/presence-dashboard.component';
import {DASHBOARD_ENTRIES} from 'dashboard';
import {PresenceDashboardEntry} from './PresenceDashboardEntry';

@NgModule({
	imports: [],
	declarations: [PresenceDashboardComponent],
	exports: [PresenceDashboardComponent],
	providers: [{provide: DASHBOARD_ENTRIES, useClass: PresenceDashboardEntry, multi: true}],
	entryComponents: [
		PresenceDashboardComponent
	]
})
export class PresenceModule {
}
