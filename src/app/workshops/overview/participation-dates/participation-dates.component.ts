import {Component, OnInit} from '@angular/core';
import {Workshop} from '../../service/Workshop';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-participation-dates',
	templateUrl: './participation-dates.component.html',
	styleUrls: ['./participation-dates.component.css']
})
export class ParticipationDatesComponent implements OnInit {

	public workshop: Workshop;
	public dates: string[] = [];


	constructor(private modal: NgbActiveModal) {
	}

	ngOnInit() {
		console.log(this.workshop);
	}

	public handleDateClick(date: string, checked: boolean) {
		if (checked && !this.dates.includes(date)) {
			this.dates.push(date);
		} else if (!checked) {
			const index = this.dates.indexOf(date);
			if (index > -1) {
				this.dates.splice(index, 1);
			}
		}
	}

	public dismiss() {
		this.modal.dismiss();
	}

	public submit() {
		this.modal.close(this.dates);
	}
}
