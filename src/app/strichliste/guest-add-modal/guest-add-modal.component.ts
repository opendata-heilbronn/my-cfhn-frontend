import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-guest-add-modal',
	templateUrl: './guest-add-modal.component.html',
	styleUrls: ['./guest-add-modal.component.css']
})
export class GuestAddModalComponent implements OnInit {

	public username: string = '';

	constructor(public activeModal: NgbActiveModal) {
	}

	ngOnInit() {
	}

}
