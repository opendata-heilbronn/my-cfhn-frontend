import {Component, OnInit} from '@angular/core';
import {Workshop} from '../../../service/Workshop';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-cancel-workshop',
	templateUrl: './cancel-workshop.component.html',
	styleUrls: ['./cancel-workshop.component.css']
})
export class CancelWorkshopComponent implements OnInit {

	public workshop: Workshop;

	constructor(private modal: NgbActiveModal) {
	}

	ngOnInit() {
	}

	submit() {
		this.modal.close();
	}

	dismiss() {
		this.modal.dismiss();
	}
}
