import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PresentMember} from '../model/PresentMember';
import {environment} from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PresenceService {

	constructor(private http: HttpClient) {
	}

	public getPresentMembers(): Observable<PresentMember[]> {
		return this.http.get<PresentMember[]>(`${environment.presenceUrl}/presence/`, {withCredentials: true});
	}

	public getMyRegisteredMacs(): Observable<string[]> {
		return this.http.get<string[]>(`${environment.presenceUrl}/registration/me`, {withCredentials: true});
	}

	public setRegisteredMacs(macs: string[]): Observable<string[]> {
		return this.http.put<string[]>(`${environment.presenceUrl}/registration/me`, macs, {withCredentials: true});
	}
}
