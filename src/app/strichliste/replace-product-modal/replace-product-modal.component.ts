import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-replace-product-modal',
	templateUrl: './replace-product-modal.component.html',
	styleUrls: ['./replace-product-modal.component.css']
})
export class ReplaceProductModalComponent implements OnInit {

	public countdown: number = 5;
	private timeout = null;

	constructor(public activeModal: NgbActiveModal) {
	}

	ngOnInit() {
		this.timeout = setTimeout(this.timeoutFunction.bind(this), 1000);
	}

	timeoutFunction() {
		if (--this.countdown <= 0) {
			this.close();
		} else {
			this.timeout = setTimeout(this.timeoutFunction.bind(this), 1000);
		}
	}

	close() {
		clearTimeout(this.timeout);
		this.activeModal.close();
	}
}
