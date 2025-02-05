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

	if (typeof dateInput === 'string') {
		const dateTimeParts = dateInput.split(' ');
		[day, month, year] = dateTimeParts[0].split('.').map(Number);
		if (dateTimeParts[1]) {
			[hours, minutes] = dateTimeParts[1].split(':').map(Number);
		}
		inputDate = new Date(year, month - 1, day, hours, minutes);
	} else if (dateInput instanceof Date) {
		inputDate = dateInput;
		day = inputDate.getDate();
		month = inputDate.getMonth() + 1;
		year = inputDate.getFullYear();
		hours = inputDate.getHours();
		minutes = inputDate.getMinutes();
	} else if (typeof dateInput === 'number') {
		inputDate = new Date(dateInput);
		day = inputDate.getDate();
		month = inputDate.getMonth() + 1;
		year = inputDate.getFullYear();
		hours = inputDate.getHours();
		minutes = inputDate.getMinutes();
	} else {
		throw new Error('Invalid date format');
	}

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
		DDMMYYYY_HHMM: `${day} ${months[month - 1]} ${year} ${timeString}`,
		timeAgo
	};
}
