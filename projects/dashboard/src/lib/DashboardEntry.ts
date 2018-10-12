import {Component, InjectionToken, Type} from '@angular/core';

export abstract class DashboardEntry {
	public abstract getWidth(): "half" | "full";
	public abstract getId(): string;
	public abstract getComponent(): Type<any>
}

export const DASHBOARD_ENTRIES = new InjectionToken("dashboard-entries");
