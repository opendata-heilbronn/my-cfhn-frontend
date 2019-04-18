export interface PaginationResult<T> {
	totalItems: number;
	pageSize: number;
	pageCount: number;
	data: T[]
}
