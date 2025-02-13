import { ELessonFilters, TLesson } from './types';

export const filters: { label: string; value: ELessonFilters }[] = [
	{
		label: 'Баардык сабактар',
		value: ELessonFilters.ALL
	},
	{
		label: 'Башталбагандар',
		value: ELessonFilters.UNINITIATED
	},
	{
		label: 'Жүрүп тургандар',
		value: ELessonFilters.THOSE_WHO_WALK
	},
	{
		label: 'Бүткөндөр',
		value: ELessonFilters.FINISHED
	}
];

export const example_lessons: TLesson[] = [
	{
		id: 'c1',
		image_src: '/images/lesson1.png',
		title: 'Тема: Намаз жана Ыйман негиздери',
		module_count: 4,
		progress: 0,
		category: 'Ибадат жана Ыйман',
		description: 'Намаз, Ыйман жана Вахий тууралуу толук кандуу сабактар.',
		type: 'video'
	},
	{
		id: 'c2',
		image_src: '/images/lesson1.png',
		title: 'Тема: Сахих аль-Бухари',
		module_count: 15,
		progress: 0,
		category: 'Китептер боюнча',
		description: 'Имам аль-Бухаринин хадис жыйнагы боюнча сабактар',
		type: 'audio'
	},
	{
		id: 'c3',
		image_src: '/images/lesson1.png',
		title: 'Тема: Сахих аль-Бухари',
		module_count: 18,
		progress: 0,
		category: 'Китептер боюнча',
		description: 'Имам аль-Бухаринин хадис жыйнагы боюнча сабактар',
		type: 'video'
	}
];
