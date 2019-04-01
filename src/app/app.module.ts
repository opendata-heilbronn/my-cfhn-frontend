import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import {StrichlisteModule} from './strichliste/strichliste.module';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {InventoryModule} from './inventory/inventory.module';
import {InfrastructureModule} from './infrastructure/infrastructure.module';
import {PremiumModule} from './premium/premium.module';

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
		StrichlisteModule,
		InventoryModule,
		InfrastructureModule,
		PremiumModule,
		NgbModule.forRoot(),
	],
	providers: [
		CookieService,
		{provide: LOCALE_ID, useValue: 'de'}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

registerLocaleData(localeDe, 'de');
