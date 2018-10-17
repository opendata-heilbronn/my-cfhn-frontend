import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VoucherRequest} from './model/VoucherRequest';
import {Voucher} from './model/Voucher';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class VoucherService {

	constructor(private http: HttpClient) {
	}

	public getVouchers(): Observable<Voucher[]> {
		return this.http.get<Voucher[]>('https://memberdata.my.cfhn.it/voucher', {withCredentials: true});
	}

	public createVoucher(voucher: VoucherRequest): Observable<Voucher> {
		return this.http.post<Voucher>('https://memberdata.my.cfhn.it/voucher', voucher, {withCredentials: true});
	}

	public deleteVoucher(voucher: Voucher): Observable<Voucher> {
		return this.http.delete<Voucher>(`https://memberdata.my.cfhn.it/voucher/${voucher.token}`, {withCredentials: true});
	}
}
