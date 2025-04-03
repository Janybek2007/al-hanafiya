// type Id = string | number

export const paths = {
	home: '/',
	teacherProfile: `/profile`,
	_lessons: '/lessons',
	lessons: {
		by_category: (slug: string) => `/lessons/c?category=${slug}`,
		with_module: (mSlug: string, lSlug: string) =>
			`/lessons/m/${mSlug}?slug=${lSlug}`,
		with_topic: (slug: string) => `/lessons/t/${slug}`
	},
	questions: '/questions',
	questionsDetail: (id: number | string) => `/questions/${id}`,
	articles: '/articles',
	articleDetail: (slug: string) => `/articles/${slug}`,
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
