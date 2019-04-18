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
				redirectTo: 'april-fools-2019'
			},
			{
				path: 'premium/fool',
				redirectTo: 'april-fools-2019/fool'
			},
			{
				path: 'april-fools-2019',
				component: PremiumComponent
			},
			{
				path: 'april-fools-2019/fool',
				component: FoolComponent
			}
		])
	],
	declarations: [PremiumComponent, FoolComponent]
})
export class PremiumModule {
}
