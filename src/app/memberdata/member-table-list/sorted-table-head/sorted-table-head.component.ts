import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'th[sorted-table-head]',
	templateUrl: './sorted-table-head.component.html',
	styleUrls: ['./sorted-table-head.component.css'],
	host: {
		'(click)': 'onClick()'
	}
})
export class SortedTableHeadComponent implements OnInit {

	@Input() public title: string;
	@Input() public keyName: string;
	@Input() public sortedBy: string;
	@Output() public sort: EventEmitter<{keyName: string, ascending: boolean}> = new EventEmitter<{keyName: string, ascending: boolean}>();

	public ascending: boolean = false;

	constructor() {
	}

	ngOnInit() {
	}

	onClick() {
		this.ascending = !this.ascending;
		this.sort.emit({
			keyName: this.keyName,
			ascending: this.ascending
		});
	}

}
