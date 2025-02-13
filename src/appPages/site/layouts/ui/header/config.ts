import { paths } from '$/shared/routing';

export const nav_items = [
	{
		label: 'Башкы бет',
		to: paths.home
	},
	{
		label: 'Устаз жөнүндө',
		to: paths.teacherProfile
	},
	{
		label: 'Сабактар',
		to: paths.lessons.index
	},
	{
		label: 'Суроо-жооп',
		to: paths['q&a']
	},
	{
		label: 'Макалалар',
		to: paths.articles
	}
];
