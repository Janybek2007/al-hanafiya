import { Icons } from '$/shared/components';
import { paths } from '$/shared/routing';

export const nav_items = [
	{
		label: 'Башкы бет',
		to: paths.home,
		icon: Icons.Home
	},
	{
		label: 'Устаз жөнүндө',
		to: paths.teacherProfile,
		icon: Icons.User
	},
	{
		className: 'pl',
		label: 'Сабактар',
		to: paths._lessons,
		icon: Icons.Lessons
	},
	{
		label: 'Суроо-жооп',
		to: paths['questions'],
		icon: Icons.Questions
	},
	{
		className: 'l',
		label: 'Макалалар',
		to: paths.articles,
		icon: Icons.Articles
	}
];
