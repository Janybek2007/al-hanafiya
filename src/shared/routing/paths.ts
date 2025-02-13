// type Id = string | number

export const paths = {
	home: '/',
	teacherProfile: `/profile`,
	lessons: {
		index: '/lessons',
		by_books: '/lessons/c/by_books',
		latest_lessons: '/lessons/c/latest_lessons',
		fiqh: '/lessons/c/fiqh',
		aqidah: '/lessons/c/aqidah'
	},
	['q&a']: '/q&a',
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
