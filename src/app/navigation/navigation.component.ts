import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	public routes: Routes;

	constructor(private router: Router) {
		this.routes = router.config.filter(route => route.data.include && route.data.name);
		console.log(this.routes);
	}

	ngOnInit() {
	}

}
