import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {Item} from '../service/model/Item';
import {BehaviorSubject, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Page} from '../service/model/Page';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

	public items: Page<Item[]> = null;

	public page$: Subject<number> = new BehaviorSubject(0);

	public pagination: number[] = [];

	public childActive: boolean = false;

	constructor(private inventoryService: InventoryService) {
	}

	ngOnInit() {
		this.page$.pipe(
			switchMap(pagenr => this.inventoryService.getItems(pagenr))
		).subscribe(items => {
			this.items = items;
			this.generatePagination(items.page, items.totalPages);
		});
	}

	generatePagination(currentPage: number, totalPages: number) {
		const pagination = [0];
		const margin = 1;

		for (let i = currentPage - margin; i < currentPage + margin; i++) {
			if (i > 0 && i < (totalPages - 1)) {
				pagination.push(i);
			}
		}

		if (!pagination.includes(totalPages - 1)) {
			pagination.push(totalPages - 1);
		}
		this.pagination = pagination;
	}

}
