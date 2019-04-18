import {Component, OnInit} from '@angular/core';
import {WorkshopService} from '../../service/workshop.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginationResult} from '../../service/PaginationResult';
import {Attendance, Workshop} from '../../service/Workshop';
import {AuthenticationService} from '../../../../authentication/authentication/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParticipationDatesComponent} from '../participation-dates/participation-dates.component';
import {switchMap} from 'rxjs/operators';
import {VisitorInformationComponent} from '../../visitor-information/visitor-information.component';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
	selector: 'app-workshop-overview',
	templateUrl: './workshop-overview.component.html',
	styleUrls: ['./workshop-overview.component.css']
})
export class WorkshopOverviewComponent implements OnInit {

	public workshops$: Observable<PaginationResult<Workshop>>;
	public page$: BehaviorSubject<number> = new BehaviorSubject(0);
	public username: string = null;

	constructor(private workshopService: WorkshopService, private authenticationService: AuthenticationService, private modalService: NgbModal) {
	}

	ngOnInit() {
		this.workshops$ = this.page$.pipe(
			switchMap(page => this.workshopService.getWorkshops(page, 5))
		);
		if (this.authenticationService.isAuthenticated()) {
			this.username = this.authenticationService.getTokenData().username;
		}
	}

	public hasOwnAttendance(attendance: Attendance[]) {
		return this.username !== null && attendance.find(a => a.username === this.username);
	}

	public participate(workshop: Workshop) {
		const modalRef = this.modalService.open(ParticipationDatesComponent, {size: 'lg'});
		(modalRef.componentInstance as ParticipationDatesComponent).workshop = workshop;
		modalRef.result.then(dates => {
			this.participateDates(workshop.id, dates)
				.subscribe(() => {
					this.page$.next(this.page$.value);
				});
		}, () => {
		});
	}

	private participateDates(workshopId: string, dates: string[]): Observable<Workshop> {
		if (this.authenticationService.isAuthenticated()) {
			return this.workshopService.participateAsMember(workshopId, dates);
		}

		return fromPromise(this.modalService.open(VisitorInformationComponent, {size: 'lg'}).result)
			.pipe(
				switchMap(({displayName, email}) => this.workshopService.participateAsVisitor(workshopId, dates, displayName, email))
			);
	}

	public reload() {
		this.page$.next(this.page$.value);
	}

	public canDelete() {
		if (this.authenticationService.isAuthenticated()) {
			const groups = this.authenticationService.getTokenData().groups;
			return groups.find(g => g.startsWith('cn=infrastructureAdmins') || g.startsWith('cn=boardMembers'));
		}
		return false;
	}

	public deleteWorkshop(workshop: Workshop, modal) {
		this.modalService.open(modal, {size: 'lg'}).result.then(() => {
			this.workshopService.deleteWorkshop(workshop.id)
				.subscribe(() => {
					this.page$.next(this.page$.value);
				}, err => {
					console.error(err);
				});
		}, () => {
		});

	}
}
