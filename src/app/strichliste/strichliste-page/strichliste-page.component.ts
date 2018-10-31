import {Component, OnInit} from '@angular/core';
import {StrichlisteService} from '../service/strichliste.service';
import {StrichlisteUser} from '../service/StrichlisteUser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PayConsumeModalComponent} from '../pay-consume-modal/pay-consume-modal.component';
import {ReplaceProductModalComponent} from '../replace-product-modal/replace-product-modal.component';

@Component({
	selector: 'app-strichliste-page',
	templateUrl: './strichliste-page.component.html',
	styleUrls: ['./strichliste-page.component.css']
})
export class StrichlistePageComponent implements OnInit {

	public users: StrichlisteUser[];
	public error: Error;

	constructor(private strichlisteService: StrichlisteService, private modalService: NgbModal) {
	}

	ngOnInit() {
		this.strichlisteService.getUserOverview().subscribe(users => this.users = users);
	}

	public openModal(user: StrichlisteUser) {
		const modalRef = this.modalService.open(PayConsumeModalComponent, {size: 'fullsize' as 'sm' | 'lg'});
		modalRef.componentInstance.user = user;
		modalRef.result.then(result => {
			const index = this.users.findIndex(user => result.id === user.id);
			if (index !== -1) {
				this.users[index] = result;
			}
			this.modalService.open(ReplaceProductModalComponent, {size: 'lg'});
		}, err => this.error = err);
	}
}
