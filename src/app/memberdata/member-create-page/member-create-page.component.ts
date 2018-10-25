import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MemberdataService} from '../service/memberdata.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-member-create-page',
	templateUrl: './member-create-page.component.html',
	styleUrls: ['./member-create-page.component.css']
})
export class MemberCreatePageComponent implements OnInit {

	@ViewChild('memberForm') memberForm: NgForm;

	public error: Error = null;

	constructor(private memberService: MemberdataService, private router: Router) {
	}

	ngOnInit() {
	}

	createMember() {
		console.log(this.memberForm.value);
		this.memberService.createMember(this.memberForm.value)
			.subscribe(member => {
				this.router.navigateByUrl('/members');
			}, error => {
				this.error = error;
			});
	}

}
