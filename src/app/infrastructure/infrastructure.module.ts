import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {RouterModule} from '@angular/router';
import {AuthenticationGuard} from '../../authentication/guard/authentication.guard';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'infrastructure',
				component: OverviewComponent,
				data: {
					include: true,
					name: 'Infrastruktur'
				},
				canActivate: [AuthenticationGuard]
			}
		])
	],
	declarations: [OverviewComponent]
})
export class InfrastructureModule {
}
