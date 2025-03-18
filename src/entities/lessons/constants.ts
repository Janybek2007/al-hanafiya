import { ELessonFilters } from './types';

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
