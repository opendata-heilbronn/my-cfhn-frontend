import {Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DashboardEntry} from '../DashboardEntry';
import {DashboardHostDirective} from '../dashboard-host.directive';

@Component({
	selector: 'lib-dashboard-entry',
	templateUrl: './dashboard-entry.component.html',
	styleUrls: ['./dashboard-entry.component.css']
})
export class DashboardEntryComponent implements OnInit, OnChanges {

	@Input() public dashboardEntry: DashboardEntry;
	@ViewChild(DashboardHostDirective) dashboardHost: DashboardHostDirective;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {
	}

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges): void {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dashboardEntry.getComponent());
		const viewContainerRef = this.dashboardHost.viewContainerRef;
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);
	}



}
