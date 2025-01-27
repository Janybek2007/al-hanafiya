export interface PageProps<
	P extends string[] = [''],
	SP extends string[] = ['']
> {
	params: Record<P[number], string>
	searchParams: Record<SP[number], string>
}
