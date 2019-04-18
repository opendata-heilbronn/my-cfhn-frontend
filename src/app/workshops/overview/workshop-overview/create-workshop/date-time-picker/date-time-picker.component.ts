import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-date-time-picker',
	templateUrl: './date-time-picker.component.html',
	styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {

	public editState: boolean = false;
	public date: NgbDateStruct;
	public time: NgbTimeStruct;
	public minDate: NgbDateStruct;

	@Input()
	public datetime: string;
	@Output()
	public datetimeChange: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onRemoved: EventEmitter<void> = new EventEmitter<void>();


	constructor() {
	}

	ngOnInit() {
		if (this.datetime === '') {
			this.editState = true;
			const date = new Date();
			date.setMinutes(Math.floor(date.getMinutes() / 5) * 5);
			this.datetime = date.toISOString();
		}
		const date = new Date(this.datetime);
		this.date = {
			day: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear()
		};

		this.time = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: 0
		};

		const today = new Date();
		this.minDate = {
			day: today.getDate(),
			month: today.getMonth() + 1,
			year: today.getFullYear()
		};
	}

	onDateSelected(date: NgbDateStruct) {
		this.date = date;
	}

	submit() {
		this.editState = false;
		const {year, month, day} = this.date;
		const {hour, minute} = this.time;
		const date = new Date(year, month - 1, day, hour, minute, 0);
		this.datetimeChange.emit(date.toISOString());
	}

	remove() {
		this.onRemoved.emit();
	}
}
