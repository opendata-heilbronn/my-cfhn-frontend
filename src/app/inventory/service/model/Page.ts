export class Page<T> {
	data: T;
	size: number;
	page: number;
	totalElements: number;
	totalPages: number;

	constructor(data: T, halPage: any) {
		this.data = data;
		this.size = halPage.size;
		this.page = halPage.number;
		this.totalElements = halPage.totalElements;
		this.totalPages = halPage.totalPages;
	}
}
