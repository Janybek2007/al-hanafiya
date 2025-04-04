import { paths } from '$/shared/routing';

export const nav_items = [
	{
		label: 'Башкы бет',
		to: paths.home
	},
	{
		label: 'Устаз жөнүндө',
		to: (name: string) => paths.teacherProfile(name)
	},
	{
		label: 'Сабактар',
		to: paths.lessons
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
