import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VoucherPageComponent} from './voucher-page/voucher-page.component';
import {RedeemPageComponent} from './redeem-page/redeem-page.component';
import {AuthenticationGuard} from '../authentication/guard/authentication.guard';
import {AuthorizationGuard} from '../authentication/guard/authorization.guard';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: 'voucher',
				component: VoucherPageComponent,
				data: {
					include: true,
					name: 'Voucher',
					groups: ['boardMembers', 'infrastructureAdmins']
				},
				canActivate: [AuthenticationGuard, AuthorizationGuard]
			},
			{
				path: 'voucher/:id',
				component: RedeemPageComponent,
				data: {
					include: false
				}
			}
		])
	],
	declarations: [VoucherPageComponent, RedeemPageComponent]
})
export class VoucherModule {
}
