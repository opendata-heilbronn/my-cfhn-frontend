import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Voucher} from '../model/Voucher';
import {VoucherRedeeming} from '../model/VoucherRedeeming';
import {VoucherService} from '../voucher.service';
import {flatMap, map} from 'rxjs/operators';

@Component({
	selector: 'app-redeem-page',
	templateUrl: './redeem-page.component.html',
	styleUrls: ['./redeem-page.component.css']
})
export class RedeemPageComponent implements OnInit {

	public token: string;
	public loading: boolean = true;
	public voucher: Voucher;
	public voucherRedeeming: VoucherRedeeming = {
		username: '',
		fullName: '',
		birthday: '',
		password: ''
	};
	public resultUsername: string = '';

	constructor(private route: ActivatedRoute, private voucherService: VoucherService) {
		route.paramMap
			.pipe(
				map(paramMap => paramMap.get('id')),
				flatMap(token => this.voucherService.getVoucher(token))
			)
			.subscribe(voucher => {
				this.voucher = voucher;
				this.loading = false;
			}, () => this.loading = false);
	}

	ngOnInit() {
	}

	redeem() {
		this.voucherService.redeemVoucher(this.voucher.token, this.voucherRedeeming)
			.subscribe(result => {
				this.resultUsername = result.username;
			})
	}
}
