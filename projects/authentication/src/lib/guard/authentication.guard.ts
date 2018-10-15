import {Inject, Injectable, InjectionToken} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';

export const REDIRECT_URL = new InjectionToken("redirect-url");

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	public constructor(private authService: AuthenticationService, @Inject(REDIRECT_URL) private redirectUrl: string) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		const authenticated = this.authService.isAuthenticated();
		if(!authenticated) {
			window.location.href = 'https://login.my.cfhn.it/?redirect=' + this.redirectUrl;
		}
		return authenticated;
	}
}
