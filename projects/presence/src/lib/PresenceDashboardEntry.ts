import {DashboardEntry} from 'dashboard';
import {Injectable, Type} from '@angular/core';
import {PresenceDashboardComponent} from './presence-dashboard/presence-dashboard.component';

@Injectable({
	providedIn: 'root'
})
export class PresenceDashboardEntry extends DashboardEntry {
	getWidth(): 'half' | 'full' {
		return 'full';
	}

	getComponent(): Type<any> {
		return PresenceDashboardComponent;
	}

	getId(): string {
		return "presence";
	}

}
