import {Component, OnDestroy, OnInit} from '@angular/core';
import {StrichlisteService} from '../service/strichliste.service';
import {StrichlisteUser} from '../service/StrichlisteUser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PayConsumeModalComponent} from '../pay-consume-modal/pay-consume-modal.component';

@Component({
	selector: 'app-strichliste-page',
	templateUrl: './strichliste-page.component.html',
	styleUrls: ['./strichliste-page.component.css']
})
export class StrichlistePageComponent implements OnInit, OnDestroy {

	public users: StrichlisteUser[];
	public error: Error;

	private timeout = null;

	constructor(private strichlisteService: StrichlisteService, private modalService: NgbModal) {
	}

	ngOnInit() {
		this.autoRefresh();
	}

	ngOnDestroy(): void {
		clearTimeout(this.timeout);
	}

	public openModal(user: StrichlisteUser) {
		const modalRef = this.modalService.open(PayConsumeModalComponent, {size: 'fullsize' as 'sm' | 'lg'});
		modalRef.componentInstance.user = user;
		modalRef.result.then(result => {
			const index = this.users.findIndex(user => result.id === user.id);
			if (index !== -1) {
				this.users[index] = result;
			}
		}, err => this.error = err);
	}

	autoRefresh() {
		this.refresh();
		this.timeout = setTimeout(this.autoRefresh.bind(this), 60 * 1000);
	}

	refresh() {
		this.strichlisteService.getUserOverview().subscribe(users => this.users = users);
	}
}
