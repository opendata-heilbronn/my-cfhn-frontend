import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {InventoryService} from '../service/inventory.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-new-entry',
	templateUrl: './new-entry.component.html',
	styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

	public error: string = null;

	constructor(private inventoryService: InventoryService, private router: Router) {
	}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		this.inventoryService.createItem(form.value)
			.subscribe(() => {
				this.router.navigate(['/inventory']);
			}, err => {
				this.error = err;
			});
	}

}
