import {Component, OnInit} from '@angular/core';
import {Voucher} from '../model/Voucher';
import {VoucherService} from '../voucher.service';
import {VoucherRequest} from '../model/VoucherRequest';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-voucher-page',
	templateUrl: './voucher-page.component.html',
	styleUrls: ['./voucher-page.component.css']
})
export class VoucherPageComponent implements OnInit {


	public voucher: VoucherRequest = {
		mail: '',
		entryDate: new Date().toISOString().substr(0, 'YYYY-MM-DD'.length),
		memberType: 'ACTIVE_MEMBER'
	};

	public memberTypes = [
		{key: 'ACTIVE_MEMBER', name: 'Aktives Mitglied'},
		{key: 'PASSIVE_MEMBER', name: 'Passives Mitglied'},
		{key: 'CORPORATE_MEMBER', name: 'Firmenmitglied'}
	];

	public createdVouchers: Voucher[] = [];

	public vouchers: Voucher[] = [];

	constructor(private voucherService: VoucherService, private modals: NgbModal) {
	}

	ngOnInit() {
		this.loadVouchers();
	}

	loadVouchers() {
		this.voucherService.getVouchers()
			.subscribe(vouchers => this.vouchers = vouchers);
	}

	createVoucher() {
		this.voucherService.createVoucher(this.voucher)
			.subscribe(voucher => {
				this.loadVouchers();
			});
	}

	deleteVoucher(modal:any, voucher: Voucher) {
		this.modals.open(modal).result.then(() => {
			this.voucherService.deleteVoucher(voucher)
				.subscribe(() => this.loadVouchers());
		}, () => {});

	}
}
