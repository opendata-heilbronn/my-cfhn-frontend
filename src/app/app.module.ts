import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DashboardModule} from 'dashboard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {PresenceModule} from '../../projects/presence/src/lib/presence.module';
import {CookieService} from 'ngx-cookie-service';

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
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
