import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {TokenData} from './TokenData';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private cookies: CookieService) {
	}

	public isAuthenticated(): boolean {
		if (!this.cookies.check('cfhn')) {
			return false;
		}
		const data = this.getTokenData();
		if(data === null) {
			return false;
		}
		const now = Math.floor(Date.now() / 1000);
		return data.exp > now;
	}

	public hasAnyGroup(groups: string[]) {
		return groups.some(rg => this.getTokenData().groups.includes(`cn=${rg},ou=groups,dc=cfhn,dc=it`))
	}

	public getTokenData(): TokenData {
		const cookie = this.cookies.get('cfhn');
		const parts = cookie.split('.');
		if (parts.length != 3) {
			return null;
		}
		return JSON.parse(atob(parts[1]));
	}
}
