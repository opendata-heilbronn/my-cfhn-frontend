import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StrichlisteUser} from './StrichlisteUser';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StrichlisteProduct} from './StrichlisteProduct';
import {publishReplay, refCount} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class StrichlisteService {

	private products$ = null;

	constructor(private http: HttpClient) {
	}

	public getUserOverview(): Observable<StrichlisteUser[]> {
		return this.http.get<StrichlisteUser[]>(environment.strichlisteUrl + '/users', {withCredentials: true});
	}

	public getProducts(): Observable<StrichlisteProduct[]> {
		if (!this.products$) {
			this.products$ = this.http.get<StrichlisteProduct[]>(environment.strichlisteUrl + '/products', {withCredentials: true})
				.pipe(
					publishReplay(1),
					refCount()
				);
		}
		return this.products$;
	}

	public forceReloadProducts(): Observable<StrichlisteProduct[]> {
		this.products$ = null;
		return this.getProducts();
	}

	public addConsumption(username: string, products: { [productId: string]: number }): Observable<StrichlisteUser> {
		return this.http.post<StrichlisteUser>(`${environment.strichlisteUrl}/users/${username}/consumption`, products, {withCredentials: true});
	}

	public pay(username: string, amount: number): Observable<StrichlisteUser> {
		return this.http.post<StrichlisteUser>(`${environment.strichlisteUrl}/users/${username}/balance`, amount, {withCredentials: true});
	}

	public addGuest(guestName: string): Observable<StrichlisteUser> {
		return this.http.post<StrichlisteUser>(`${environment.strichlisteUrl}/users`, {username: guestName}, {withCredentials: true});
	}

	public deleteGuest(guestName: string): Observable<StrichlisteUser> {
		return this.http.delete<StrichlisteUser>(`${environment.strichlisteUrl}/users/${guestName}`, {withCredentials: true});
	}
}
