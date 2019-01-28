import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
	public constructor(private authenticationService: AuthenticationService) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if(!next.data.groups) {
			return false;
		}
		const routeGroups: string[] = next.data.groups;
		const userGroups = this.authenticationService.getTokenData().groups;
		return routeGroups.some(rg => userGroups.includes(`cn=${rg},ou=groups,dc=cfhn,dc=it`));
	}

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(childRoute, state);
	}
}
