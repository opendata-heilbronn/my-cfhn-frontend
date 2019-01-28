import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthenticationGuard} from '../../authentication/guard/authentication.guard';
import {OverviewComponent} from './overview/overview.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';
import {NewEntryComponent} from './new-entry/new-entry.component';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'inventory',
				component: OverviewComponent,
				data: {
					include: true,
					name: 'Inventar'
				},
				canActivate: [AuthenticationGuard],
				canActivateChild: [AuthenticationGuard],
				children: [
					{
						path: 'id/:id',
						component: DetailComponent,
					},
					{
						path: 'new',
						component: NewEntryComponent,
					}
				]
			}
		]),
		NgbModule
	],
	declarations: [OverviewComponent, DetailComponent, NewEntryComponent]
})
export class InventoryModule {
}
