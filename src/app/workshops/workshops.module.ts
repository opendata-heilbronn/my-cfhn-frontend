import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {InterestOverviewComponent} from './overview/interest-overview/interest-overview.component';
import {WorkshopOverviewComponent} from './overview/workshop-overview/workshop-overview.component';
import {WorkshopDetailComponent} from './overview/workshop-detail/workshop-detail.component';
import {FormsModule} from '@angular/forms';
import {VisitorInformationComponent} from './visitor-information/visitor-information.component';
import {ParticipationDatesComponent} from './overview/participation-dates/participation-dates.component';
import {ValidationComponent} from './validation/validation.component';
import {CreateWorkshopComponent} from './overview/workshop-overview/create-workshop/create-workshop.component';
import {DateTimePickerComponent} from './overview/workshop-overview/create-workshop/date-time-picker/date-time-picker.component';
import {NgbDatepickerModule, NgbPopoverModule, NgbRootModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {SelectDateComponent} from './overview/workshop-detail/select-date/select-date.component';
import {CancelWorkshopComponent} from './overview/workshop-detail/cancel-workshop/cancel-workshop.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbDatepickerModule,
		NgbTimepickerModule,
		RouterModule.forChild([
			{
				path: 'workshops',
				component: OverviewComponent,
				data: {
					include: true,
					name: 'Workshops'
				},
				children: [
					{
						path: '',
						redirectTo: 'interests',
						pathMatch: 'full'
					},
					{
						path: 'interests',
						component: InterestOverviewComponent
					},
					{
						path: 'events',
						component: WorkshopOverviewComponent
					},
					{
						path: 'events/:id',
						component: WorkshopDetailComponent
					},
					{
						path: 'validation/:token',
						component: ValidationComponent
					}
				]
			}
		]),
		NgbPopoverModule,
		NgbRootModule
	],
	declarations: [
		OverviewComponent,
		InterestOverviewComponent,
		WorkshopOverviewComponent,
		WorkshopDetailComponent,
		VisitorInformationComponent,
		ParticipationDatesComponent,
		ValidationComponent,
		CreateWorkshopComponent,
		DateTimePickerComponent,
		SelectDateComponent,
		CancelWorkshopComponent
	],
	entryComponents: [
		VisitorInformationComponent,
		ParticipationDatesComponent,
		SelectDateComponent,
		CancelWorkshopComponent
	]
})
export class WorkshopsModule {
}
