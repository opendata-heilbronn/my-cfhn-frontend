import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication/authentication.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	public routes: Routes;

	constructor(private router: Router, private authService: AuthenticationService) {
		this.routes = router.config
			.filter(route => route.data && route.data.include && route.data.name)
			.filter(route => {
				if(route.data && route.data.groups) {
					return this.authService.hasAnyGroup(route.data.groups);
				}
				return true;
			});
		console.log(this.routes);
	}

	ngOnInit() {
	}

}
