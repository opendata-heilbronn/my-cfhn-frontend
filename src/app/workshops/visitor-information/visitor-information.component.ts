import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-visitor-information',
	templateUrl: './visitor-information.component.html',
	styleUrls: ['./visitor-information.component.css']
})
export class VisitorInformationComponent implements OnInit {

	public displayName: string;
	public email: string;

	constructor(public modal: NgbActiveModal) {
	}

	ngOnInit() {
	}

	public submit() {
		this.modal.close({
			displayName: this.displayName,
			email: this.email
		});
	}

}
