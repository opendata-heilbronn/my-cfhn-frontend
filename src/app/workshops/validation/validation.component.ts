import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {WorkshopService} from '../service/workshop.service';

@Component({
	selector: 'app-validation',
	templateUrl: './validation.component.html',
	styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

	public loading: boolean = true;
	public success: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private workshopService: WorkshopService) {
	}

	ngOnInit() {
		this.activatedRoute.params.pipe(
			map(params => params.token),
			switchMap(token => this.workshopService.validate(token))
		).subscribe(result => {
			this.loading = false;
			this.success = result.successful;
		});
	}

}
