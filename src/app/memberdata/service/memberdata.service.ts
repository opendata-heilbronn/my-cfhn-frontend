import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from './Member';
import {HttpClient} from '@angular/common/http';
import {MemberCreateRequest} from './MemberCreateRequest';

@Injectable({
	providedIn: 'root'
})
export class MemberdataService {

	private API_URL = 'https://memberdata.my.cfhn.it';

	constructor(private http: HttpClient) {
	}

	public getMembers: () => Observable<Member[]> = () => this.http.get<Member[]>(this.API_URL + '/user', {withCredentials: true});

	public createMember: (createMember: MemberCreateRequest) => Observable<Member> = (createMember: MemberCreateRequest) => this.http.post<Member>(this.API_URL + '/user', createMember, {withCredentials: true});
}
