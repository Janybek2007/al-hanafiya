import { paths } from '$/shared/routing';

export const nav_items = [
	{
		label: 'Башкы бет',
		to: paths.home,
		icon: '/icon/tabs-bar/home.svg'
	},
	{
		label: 'Устаз жөнүндө',
		to: paths.teacherProfile,
		icon: '/icon/tabs-bar/user-profile.svg'
	},
	{
		label: 'Сабактар',
		to: paths.lessons.index,
		icon: '/icon/tabs-bar/lessons.svg'
	},
	{
		label: 'Суроо-жооп',
		to: paths['q&a'],
		icon: '/icon/tabs-bar/q&a.svg'
	},
	{
		label: 'Макалалар',
		to: paths.articles,
		icon: '/icon/tabs-bar/articles.svg'
	}
];
