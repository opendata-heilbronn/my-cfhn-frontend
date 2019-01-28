import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../service/model/Item';
import {InventoryService} from '../service/inventory.service';
import {ActivatedRoute} from '@angular/router';
import {flatMap, map, switchMap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {Inventory, inventoryDateTimeDescSorter} from '../service/model/Inventory';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	public item: Item = null;
	public itemHistory: Inventory[] = null;
	public defaultHistoryCount = 1;
	public maxHistoryCount = this.defaultHistoryCount;
	public newEntryMode = false;
	public submittingNewEntry = false;

	@ViewChild('newEntryFormControl')
	private newEntryFormControl;

	constructor(private inventoryService: InventoryService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		this.activatedRoute.paramMap
			.pipe(
				map(map => +map.get('id')),
				switchMap(id => this.inventoryService.getItem(id)),
				flatMap(item => forkJoin(
					of(item),
					this.inventoryService.getInventoryHistory(item.id)
				))
			).subscribe(item => {
			this.item = item[0];
			this.itemHistory = item[1].sort(inventoryDateTimeDescSorter);
		});
		this.maxHistoryCount = this.defaultHistoryCount;
	}

	showMoreHistory() {
		this.maxHistoryCount += 5;
	}

	hideHistory() {
		this.maxHistoryCount = this.defaultHistoryCount;
	}

	now() {
		return new Date();
	}

	inventoryAddMode() {
		this.newEntryMode = true;
		setTimeout(() => this.newEntryFormControl.nativeElement.focus(), 0);
	}

	addNewEntry(form) {
		this.inventoryService.createInventoryEntry(this.item.id, form.value)
			.pipe(
				flatMap(() => this.inventoryService.getInventoryHistory(this.item.id))
			).subscribe(history => {
			this.itemHistory = history.sort(inventoryDateTimeDescSorter);
			this.submittingNewEntry = false;
			this.newEntryMode = false;
		});
	}
}
