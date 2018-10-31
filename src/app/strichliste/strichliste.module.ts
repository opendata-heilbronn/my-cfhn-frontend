import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StrichlistePageComponent} from './strichliste-page/strichliste-page.component';
import {RouterModule} from '@angular/router';
import {PayConsumeModalComponent} from './pay-consume-modal/pay-consume-modal.component';
import {FormsModule} from '@angular/forms';
import {ReplaceProductModalComponent} from './replace-product-modal/replace-product-modal.component';
import {AuthenticationGuard} from '../../authentication/guard/authentication.guard';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'strichliste/overview',
				component: StrichlistePageComponent,
				data: {
					include: true,
					name: 'Strichliste'
				},
				canActivate: [AuthenticationGuard]
			}
		])
	],
	entryComponents: [PayConsumeModalComponent, ReplaceProductModalComponent],
	declarations: [StrichlistePageComponent, PayConsumeModalComponent, ReplaceProductModalComponent]
})
export class StrichlisteModule {
}
