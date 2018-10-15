import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PresentMember} from './PresentMember';

@Injectable({
	providedIn: 'root'
})
export class PresenceService {

	constructor(private http: HttpClient) {
	}

	public getPresentMembers(): Observable<PresentMember[]> {
		return this.http.get<PresentMember[]>('https://presence.my.cfhn.it/presence/', {withCredentials: true});
	}

	public getMyRegisteredMacs(): Observable<string[]> {
		return this.http.get<string[]>('https://presence.my.cfhn.it/registration/me', {withCredentials: true});
	}

	public setRegisteredMacs(macs: string[]): Observable<string[]> {
		return this.http.put<string[]>('https://presence.my.cfhn.it/registration/me', macs, {withCredentials: true});
	}
}
