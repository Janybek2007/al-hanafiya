export interface PageProps<
	P extends string[] = [''],
	SP extends string[] = ['']
> {
	params: Record<P[number], string>;
	searchParams: Record<SP[number], string>;
}

export interface AsyncPageProps<
	P extends string[] = [''],
	SP extends string[] = ['']
> {
	params: Promise<Record<P[number], string>>;
	searchParams: Promise<Record<SP[number], string>>;
}
