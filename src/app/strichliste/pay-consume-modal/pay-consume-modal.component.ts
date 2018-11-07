import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StrichlisteUser} from '../service/StrichlisteUser';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StrichlisteService} from '../service/strichliste.service';
import {StrichlisteProduct} from '../service/StrichlisteProduct';
import {ReplaceProductModalComponent} from '../replace-product-modal/replace-product-modal.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-pay-consume-modal',
	templateUrl: './pay-consume-modal.component.html',
	styleUrls: ['./pay-consume-modal.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class PayConsumeModalComponent implements OnInit {

	public user: StrichlisteUser;
	public products$: Observable<StrichlisteProduct[]>;

	public payAmount: number = 0;

	constructor(public activeModal: NgbActiveModal, private strichlisteService: StrichlisteService, private modalService: NgbModal) {
	}

	ngOnInit() {
		this.products$ = this.strichlisteService.getProducts();
	}

	onPay() {
		this.strichlisteService.pay(this.user.username, Math.floor(this.payAmount * 100)).subscribe(user => {
			this.activeModal.close(user);
		}, err => {
			console.error(err);
			this.activeModal.dismiss(err);
		});
	}

	takeSingle(product: StrichlisteProduct) {
		this.strichlisteService.addConsumption(this.user.username, {[product.id]: 1}).subscribe(user => {
			this.activeModal.close(user);
			this.modalService.open(ReplaceProductModalComponent, {size: 'lg'});
		}, err => {
			console.log(err);
			this.activeModal.dismiss(err);
		});
	}

	reloadProducts() {
		this.products$ = this.strichlisteService.forceReloadProducts();
	}
}
