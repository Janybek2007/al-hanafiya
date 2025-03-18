// type Id = string | number

export const paths = {
	home: '/',
	teacherProfile: `/profile`,
	lessons: {
		index: '/lessons',
		by_category: (slug: string) => `/lessons/c/${slug}`,
		with_module: (mSlug: string, lSlug: string) =>
			`/lessons/m/${mSlug}?slug=${lSlug}`,
		with_topic: (slug: string) => `/lessons/t/${slug}`
	},
	['q&a']: '/q&a',
	['q&aDetail']: (id: number | string) => `/q&a/${id}`,
	articles: '/articles',
	contacts: '/contacts',
	meetings: '/meetings'

	// !Example
	//   catalog: (params: {}): string => {
	//     const searchParams = new URLSearchParams({ ...params })
	//     const url = `/films?${searchParams}`

	//     return url
	//   },

	// !Example
	//   to: (id: Id): string => `/film/${id}`,
};
