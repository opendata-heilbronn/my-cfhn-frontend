import {Component, OnInit} from '@angular/core';
import {Workshop} from '../../../service/Workshop';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-select-date',
	templateUrl: './select-date.component.html',
	styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit {

	public workshop: Workshop;

	public dates: string[];

	public selectedDate: string = null;

	constructor(private modal: NgbActiveModal) {
	}

	ngOnInit() {
		const possibleDates = this.workshop.possibleDates;
		this.dates = Object.keys(possibleDates)
			.sort((a, b) => possibleDates[b].length - possibleDates[a].length);
	}

	submit() {
		console.log(this.selectedDate);
		if (this.selectedDate) {
			this.modal.close(this.selectedDate);
		}
	}

	dismiss() {
		this.modal.close();
	}

}
