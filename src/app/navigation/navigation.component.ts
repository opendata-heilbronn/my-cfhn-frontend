import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication/authentication.service';
import {TokenData} from '../../authentication/authentication/TokenData';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	public routes: Routes;
	public userData: TokenData = null;

	constructor(private router: Router, private authService: AuthenticationService) {
		this.routes = router.config
			.filter(route => route.data && route.data.include && route.data.name)
			.filter(route => {
				if(route.data && route.data.groups) {
					if(!this.authService.isAuthenticated()) {
						return false;
					}
					return this.authService.hasAnyGroup(route.data.groups);
				}
				if (route.canActivate && route.canActivate.length !== 0 && this.authService.isAuthenticated()) {
					return true;
				}
				return !route.canActivate;
			});
		console.log(this.routes);
	}

	ngOnInit() {
		if (this.authService.isAuthenticated()) {
			this.userData = this.authService.getTokenData();
		}
	}

	public logout() {
		this.authService.logout();
		window.location.reload();
	}
}
