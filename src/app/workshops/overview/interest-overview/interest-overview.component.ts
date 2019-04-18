import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PaginationResult} from '../../service/PaginationResult';
import {Interest} from '../../service/Interest';
import {WorkshopService} from '../../service/workshop.service';
import {AuthenticationService} from '../../../../authentication/authentication/authentication.service';
import {switchMap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VisitorInformationComponent} from '../../visitor-information/visitor-information.component';

@Component({
	selector: 'app-interest-overview',
	templateUrl: './interest-overview.component.html',
	styleUrls: ['./interest-overview.component.css']
})
export class InterestOverviewComponent implements OnInit {

	public interests$: Observable<PaginationResult<Interest>>;
	public page$: BehaviorSubject<number> = new BehaviorSubject(0);
	public topic: string;
	public authenticated: boolean;
	public loading: boolean;

	constructor(private workshopService: WorkshopService, private authenticationService: AuthenticationService, private modalService: NgbModal) {
	}

	ngOnInit() {
		this.interests$ = this.page$.pipe(
			switchMap(page => this.workshopService.getInterests(page, 7))
		);
		this.authenticated = this.authenticationService.isAuthenticated();
	}

	public createInterest() {
		this.loading = true;
		this.workshopService.createInterest(this.topic).subscribe(interest => {
			this.loading = false;
			this.topic = '';
			this.page$.next(this.page$.value);
		}, err => {
			this.loading = false;
		});
	}

	public addInterest(id: string) {
		if (this.authenticated) {
			this.workshopService.addMemberInterest(id).subscribe(() => {
				this.page$.next(this.page$.value);
			});
		} else {
			this.modalService.open(VisitorInformationComponent, {size: 'lg'}).result.then(({displayName, email}) => {
				this.workshopService.addVisiorInterest(id, displayName, email)
					.subscribe(interest => {
						this.topic = '';
						this.page$.next(this.page$.value);
					});
			}, err => {
				console.error(err);
			});
			//this.workshopService.addVisiorInterest(id, '', '')
		}
	}

	public removeInterest(interest: Interest) {
		if (this.authenticated) {
			this.workshopService.removeMemberInterest(interest.id).subscribe(() => {
				this.page$.next(this.page$.value);
			});
		}
	}

	public isAlreadySupporter(interest: Interest): boolean {
		if (this.authenticationService.isAuthenticated()) {
			return !!interest.supporters.find(supporter => supporter.username === this.authenticationService.getTokenData().username);
		}
		return false;
	}

	public canDelete() {
		if (this.authenticationService.isAuthenticated()) {
			const groups = this.authenticationService.getTokenData().groups;
			return groups.includes('infrastructureAdmins') || groups.includes('boardMembers');
		}
		return false;
	}
}
