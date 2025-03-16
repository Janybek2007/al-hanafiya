export interface DataWithPagination<T = object> {
	count: number;
	next: null | string;
	previous: null | string;
	results: T[];
}
