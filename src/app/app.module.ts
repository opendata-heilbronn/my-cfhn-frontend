import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DashboardModule} from 'dashboard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {PresenceModule} from 'presence';
import {CookieService} from 'ngx-cookie-service';
import {REDIRECT_URL} from 'authentication';
import {environment} from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DashboardModule,
		PresenceModule,
		NgbModule.forRoot(),
	],
	providers: [
		CookieService,
		{provide: REDIRECT_URL, useValue: environment.redirectUrl}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
