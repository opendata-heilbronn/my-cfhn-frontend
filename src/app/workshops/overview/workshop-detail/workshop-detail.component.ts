import {Component, OnInit} from '@angular/core';
import {WorkshopService} from '../../service/workshop.service';
import {Observable, of, Subject} from 'rxjs';
import {Workshop, WorkshopCreateModel} from '../../service/Workshop';
import {ActivatedRoute} from '@angular/router';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthenticationService} from '../../../../authentication/authentication/authentication.service';
import {ParticipationDatesComponent} from '../participation-dates/participation-dates.component';
import {fromPromise} from 'rxjs/internal-compatibility';
import {VisitorInformationComponent} from '../../visitor-information/visitor-information.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SelectDateComponent} from './select-date/select-date.component';
import {CancelWorkshopComponent} from './cancel-workshop/cancel-workshop.component';

@Component({
	selector: 'app-workshop-detail',
	templateUrl: './workshop-detail.component.html',
	styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {

	public workshop$: Observable<Workshop>;
	public username: string = null;
	public error$: Subject<boolean> = new Subject();

	public editWorkshop: WorkshopCreateModel = {
		topic: '',
		description: '',
		possibleDates: [],
		basedOnInterest: ''
	};
	public editMode: boolean = false;
	public saving: boolean = false;
	public error: string = null;

	constructor(private workshopService: WorkshopService, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService, private modalService: NgbModal) {
	}

	ngOnInit() {
		if (this.authenticationService.isAuthenticated()) {
			this.username = this.authenticationService.getTokenData().username;
		}
		this.load();
	}

	private load() {
		this.workshop$ = this.activatedRoute.params.pipe(
			map(params => params.id),
			switchMap(id => this.workshopService.getWorkshop(id as string)),
			catchError(err => {
				console.error(err);
				this.error$.next(true);
				return of(null);
			})
		);
	}

	public getParticipants(workshop: Workshop) {
		const participants = [];
		const attendance = Object.values(workshop.possibleDates).reduce((a, b) => a.concat(...b), []);

		for (var p of attendance) {
			if (!participants.find(participant => participant.username === p.username && participant.displayName === p.displayName)) {
				participants.push(p);
			}
		}

		return participants;
	}

	public participate(workshop: Workshop) {
		const modalRef = this.modalService.open(ParticipationDatesComponent, {size: 'lg'});
		(modalRef.componentInstance as ParticipationDatesComponent).workshop = workshop;
		modalRef.result.then(dates => {
			this.participateDates(workshop.id, dates)
				.subscribe(() => {
					this.load();
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

	public selectDate(workshop: Workshop) {
		const modalRef = this.modalService.open(SelectDateComponent);
		(modalRef.componentInstance as SelectDateComponent).workshop = workshop;
		modalRef.result.then(date => {
			this.workshopService.setDate(workshop.id, date)
				.subscribe(() => this.load());
		}, err => console.error(err));
	}

	public cancelWorkshop(workshop: Workshop) {
		const modalRef = this.modalService.open(CancelWorkshopComponent);
		(modalRef.componentInstance as CancelWorkshopComponent).workshop = workshop;
		modalRef.result.then(() => {
			this.workshopService.cancelWorkshop(workshop.id)
				.subscribe(() => this.load(), err => console.log(err));
		}, () => {
		});
	}

	public edit(workshop: Workshop) {
		this.editMode = true;
		this.editWorkshop = {
			topic: workshop.topic,
			description: workshop.description,
			possibleDates: Object.keys(workshop.possibleDates),
			basedOnInterest: workshop.basedOn !== null ? workshop.basedOn.id : null
		};
	}

	public submit(id: string) {
		this.saving = true;
		this.workshopService.editWorkshop(id, this.editWorkshop)
			.subscribe(() => {
				this.load();
				this.cancelEdit();
				this.saving = false;
			}, err => {
				console.error(err);
				this.error = err.message;
				this.saving = false;
			});
	}

	public cancelEdit() {
		this.editMode = false;
	}

	public addDate() {
		this.editWorkshop.possibleDates.push('');
	}

	public removeDate(index: number) {
		this.editWorkshop.possibleDates.splice(index, 1);
	}
}
