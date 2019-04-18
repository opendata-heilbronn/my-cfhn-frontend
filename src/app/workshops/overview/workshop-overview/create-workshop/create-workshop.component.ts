import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {WorkshopCreateModel} from '../../../service/Workshop';
import {WorkshopService} from '../../../service/workshop.service';
import {NgForm} from '@angular/forms';

@Component({
	selector: 'app-create-workshop',
	templateUrl: './create-workshop.component.html',
	styleUrls: ['./create-workshop.component.css']
})
export class CreateWorkshopComponent implements OnInit {

	@Output()
	public onCreated: EventEmitter<void> = new EventEmitter();

	@ViewChild('createForm')
	public createForm: NgForm;

	public workshop: WorkshopCreateModel = {
		basedOnInterest: '',
		description: '',
		possibleDates: [],
		topic: '',
	};

	constructor(private workshopService: WorkshopService) {
	}

	ngOnInit() {
	}

	public addDate() {
		this.workshop.possibleDates.push('');
	}

	public deleteDate(index: number) {
		this.workshop.possibleDates.splice(index, 1);
	}

	public clear() {
		this.workshop = {
			basedOnInterest: '',
			description: '',
			possibleDates: [],
			topic: '',
		};
	}

	public submit() {
		this.workshopService.createWorkshop(this.workshop)
			.subscribe(() => {
				this.clear();
				this.createForm.resetForm();
				this.onCreated.emit();
			});
	}
}
