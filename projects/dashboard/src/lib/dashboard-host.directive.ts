import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dashboard-host]'
})
export class DashboardHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
