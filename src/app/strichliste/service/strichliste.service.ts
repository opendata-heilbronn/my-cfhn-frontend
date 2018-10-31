import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StrichlisteUser} from './StrichlisteUser';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StrichlisteProduct} from './StrichlisteProduct';

@Injectable({
	providedIn: 'root'
})
export class StrichlisteService {

	constructor(private http: HttpClient) {
	}

	public getUserOverview(): Observable<StrichlisteUser[]> {
		return this.http.get<StrichlisteUser[]>(environment.strichlisteUrl + '/users', {withCredentials: true});
	}

	public getProducts(): Observable<StrichlisteProduct[]> {
		return this.http.get<StrichlisteProduct[]>(environment.strichlisteUrl + '/products', {withCredentials: true});
	}

	public addConsumption(username: string, products: { [productId: string]: number }): Observable<StrichlisteUser> {
		return this.http.post<StrichlisteUser>(`${environment.strichlisteUrl}/users/${username}/consumption`, products, {withCredentials: true});
	}

	public pay(username: string, amount: number): Observable<StrichlisteUser> {
		return this.http.post<StrichlisteUser>(`${environment.strichlisteUrl}/users/${username}/balance`, amount, {withCredentials: true});
	}
}
