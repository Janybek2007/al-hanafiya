// type Id = string | number

export const paths = {
	home: '/',
	teacherProfile: (name: string) => `/profile/${name}`,
	lessons: '/lessons',
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
