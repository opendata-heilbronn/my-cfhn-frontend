export interface Inventory {
	id: {
		item: number;
		dateTime: string;
	};
	amount: number;
	username: string;
}

export function inventoryDateTimeDescSorter(i1: Inventory, i2: Inventory) {
	return i2.id.dateTime.localeCompare(i1.id.dateTime);
}
