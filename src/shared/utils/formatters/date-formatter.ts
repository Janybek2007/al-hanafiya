const months: string[] = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря'
];

type DateFormat = {
	DDMMYYYY: string;
	YYYYMMDD: string;
	MMDDYYYY: string;
	DDMMYYYY_HHMM: string;
	timeAgo: string;
};

export function formatDate(dateInput: string | Date | number): DateFormat {
	let day: number,
		month: number,
		year: number,
		hours: number = 0,
		minutes: number = 0;
	let inputDate: Date;

	try {
		if (typeof dateInput === 'string') {
			if (dateInput.includes('T')) {
				inputDate = new Date(dateInput);
			} else {
				const dateTimeParts = dateInput.split(' ');
				[day, month, year] = dateTimeParts[0].split('.').map(Number);
				if (dateTimeParts[1]) {
					[hours, minutes] = dateTimeParts[1].split(':').map(Number);
				}
				inputDate = new Date(year, month - 1, day, hours, minutes);
			}
		} else if (dateInput instanceof Date) {
			inputDate = dateInput;
		} else if (typeof dateInput === 'number') {
			inputDate = new Date(dateInput);
		} else {
			throw new Error('Invalid date format');
		}

		if (isNaN(inputDate.getTime())) {
			throw new Error('Invalid date after parsing');
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		inputDate = new Date();
	}

	day = inputDate.getDate();
	month = inputDate.getMonth() + 1;
	year = inputDate.getFullYear();
	hours = inputDate.getHours();
	minutes = inputDate.getMinutes();

	const timeString = `${String(hours).padStart(2, '0')}:${String(
		minutes
	).padStart(2, '0')}`;

	const now = new Date();
	const diffInSeconds = Math.floor(
		(now.getTime() - inputDate.getTime()) / 1000
	);
	let timeAgo = '';
	if (diffInSeconds < 60) {
		timeAgo = `${diffInSeconds} секунд`;
	} else if (diffInSeconds < 3600) {
		timeAgo = `${Math.floor(diffInSeconds / 60)} минут`;
	} else if (diffInSeconds < 86400) {
		timeAgo = `${Math.floor(diffInSeconds / 3600)} часов`;
	} else {
		timeAgo = `${Math.floor(diffInSeconds / 86400)} дней`;
	}

	return {
		DDMMYYYY: `${day} ${months[month - 1]} ${year}`,
		YYYYMMDD: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
			2,
			'0'
		)}`,
		MMDDYYYY: `${String(month).padStart(2, '0')}/${String(day).padStart(
			2,
			'0'
		)}/${year}`,
		DDMMYYYY_HHMM: `${day} ${months[month - 1]} ${year} ж. саат ${timeString}`,
		timeAgo
	};
}

// "DD.MM.YYYY HH:mm"
export function formatRelativeTime(dateStr: string): string {
	const [datePart, timePart] = dateStr.split(' ');
	const [day, month, year] = datePart.split('.').map(Number);
	const [hours, minutes] = timePart.split(':').map(Number);

	const targetDate = new Date(year, month - 1, day, hours, minutes);

	const now = new Date();

	const diffMs = now.getTime() - targetDate.getTime();
	const diffSeconds = Math.floor(diffMs / 1000);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);

	const formatWithPluralization = (
		count: number,
		unitSingular: string,
		unitPlural: string
	): string => {
		if (count === 1) {
			return `1 ${unitSingular} мурда`;
		} else if (count >= 2 && count <= 4) {
			return `${count} ${unitPlural} мурда`;
		} else {
			return `${count} ${unitPlural} мурда`;
		}
	};

	if (diffDays > 0) {
		return formatWithPluralization(diffDays, 'күн', 'күн');
	} else if (diffHours > 0) {
		return formatWithPluralization(diffHours, 'саат', 'саат');
	} else if (diffMinutes > 0) {
		return formatWithPluralization(diffMinutes, 'мүнөт', 'мүнөт');
	} else {
		return 'Бир аз мурда';
	}
}
