import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';
import {environment} from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	public constructor(private authService: AuthenticationService) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		const authenticated = this.authService.isAuthenticated();
		if(!authenticated) {
			window.location.href = 'https://login.my.cfhn.it/?redirect=' + encodeURIComponent(environment.redirectUrl + '/' + next.url);
		}
		return authenticated;
	}
}
