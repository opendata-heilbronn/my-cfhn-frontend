import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PremiumComponent} from './premium.component';
import {RouterModule} from '@angular/router';
import {FoolComponent} from './fool/fool.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'premium',
				component: PremiumComponent,
				data: {
					include: true,
					name: 'CfHN Premium'
				}
			},
			{
				path: 'premium/fool',
				component: FoolComponent
			}
		])
	],
	declarations: [PremiumComponent, FoolComponent]
})
export class PremiumModule {
}
