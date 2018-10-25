import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberListPageComponent} from './member-list-page/member-list-page.component';
import {RouterModule} from '@angular/router';
import {AuthenticationGuard} from '../../authentication/guard/authentication.guard';
import {AuthorizationGuard} from '../../authentication/guard/authorization.guard';
import {MemberTableListComponent} from './member-table-list/member-table-list.component';
import {HttpClientModule} from '@angular/common/http';
import {Nl2BrPipeModule} from 'nl2br-pipe';
import {SortedTableHeadComponent} from './member-table-list/sorted-table-head/sorted-table-head.component';
import {MemberCardListComponent} from './member-card-list/member-card-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {MemberCreatePageComponent} from './member-create-page/member-create-page.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild([
			{
				path: 'members',
				component: MemberListPageComponent,
				data: {
					include: true,
					name: 'Mitgliederverwaltung',
					groups: ['boardMembers', 'infrastructureAdmins']
				},
				canActivate: [AuthenticationGuard, AuthorizationGuard]
			},
			{
				path: 'members/new',
				component: MemberCreatePageComponent,
				data: {
					groups: ['boardMembers', 'infrastructureAdmins']
				},
				canActivate: [AuthenticationGuard, AuthorizationGuard]
			}
		]),
		Nl2BrPipeModule,
		FormsModule,
		NgbModule
	],
	declarations: [
		MemberListPageComponent,
		MemberTableListComponent,
		SortedTableHeadComponent,
		MemberCardListComponent,
		MemberCreatePageComponent
	]
})
export class MemberdataModule {
}
