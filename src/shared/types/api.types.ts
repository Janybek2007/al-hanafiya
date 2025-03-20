export interface BaseArg {
	search?: string
	page?: number
}

export interface SlugArg {
	slug: string
}

export interface IdArg {
	id: number | string;
}
