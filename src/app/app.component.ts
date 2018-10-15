import {Component, HostListener} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public isNavbarCollapsed: boolean = window.innerWidth < 768;

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.isNavbarCollapsed = this.shouldHide();
	}

	private shouldHide() {
		return window.innerWidth >= 768 ? false : this.isNavbarCollapsed;
	}
}
