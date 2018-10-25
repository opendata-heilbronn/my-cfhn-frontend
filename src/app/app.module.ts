import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DashboardModule} from '../dashboard/dashboard.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './navigation/navigation.component';
import {PresenceModule} from '../presence/presence.module';
import {CookieService} from 'ngx-cookie-service';
import {AuthenticationModule} from '../authentication/authentication.module';
import {VoucherModule} from '../voucher/voucher.module';
import {MemberdataModule} from './memberdata/memberdata.module';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		DashboardModule,
		PresenceModule,
		VoucherModule,
		MemberdataModule,
		NgbModule.forRoot(),
	],
	providers: [
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
