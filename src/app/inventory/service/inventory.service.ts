import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Place} from './model/Place';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Page} from './model/Page';
import {Item} from './model/Item';
import {Inventory} from './model/Inventory';

@Injectable({
	providedIn: 'root'
})
export class InventoryService {

	constructor(private http: HttpClient) {
	}

	public getPlaces(page: number): Observable<Page<Place[]>> {
		return this.http.get<any>(`${environment.inventoryUrl}/places?page=${page}`, {withCredentials: true})
			.pipe(
				map(res => {
					return new Page<Place[]>(res._embedded.places, res.page);
				})
			);
	}

	public getItems(page: number): Observable<Page<Item[]>> {
		return this.http.get<any>(`${environment.inventoryUrl}/items?page=${page}&projection=place-inline`, {withCredentials: true})
			.pipe(
				map(res => {
					return new Page<Item[]>(res._embedded.items, res.page);
				})
			);
	}

	public getItem(itemId: number): Observable<Item> {
		return this.http.get<Item>(`${environment.inventoryUrl}/items/${itemId}?projection=place-inline`, {withCredentials: true});
	}

	public getInventoryHistory(itemId: number): Observable<Inventory[]> {
		return this.http.get<any>(`${environment.inventoryUrl}/items/${itemId}/inventoryEntries`, {withCredentials: true})
			.pipe(
				map(res => {
					return res._embedded.inventories as Inventory[];
				})
			);

	}

	public createItem(item: Item): Observable<Object> {
		return this.http.post(`${environment.inventoryUrl}/items`, item, {withCredentials: true});
	}

	public createInventoryEntry(itemId: number, entry: any): Observable<Object> {
		return this.http.post(`${environment.inventoryUrl}/items/${itemId}/inventoryEntries`, entry, {withCredentials: true});
	}
}
