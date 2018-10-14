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
}
