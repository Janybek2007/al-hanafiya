import { IModule, IModuleComment } from './types';
export const example_modules: IModule[] = [
	{
		lId: 'c1',
		module: 1,
		id: 'm0',
		title: 'Намаз',
		description:
			'Намаз – бул мусулман жашоосунун негизги ибадаты. Бул бөлүмдө анын мааниси жана эрежелери баяндалат.',
		image_src: '',
		progress: 0,
		lessons: [
			{
				id: 'l1',
				title: 'Киришүү',
				time: 3600,
				created_at: '05.01.2025 08:30',
				comments_count: 5,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l2',
				title: 'Намаздын мааниси жана тарыхы',
				time: 4697,
				created_at: '12.01.2025 14:15',
				comments_count: 8,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l3',
				title: 'Намаздын парздары жана шарттары',
				time: 7200,
				created_at: '18.01.2025 19:00',
				comments_count: 12,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l4',
				title: 'Намаздын түрлөрү жана окулушу',
				time: 4697,
				created_at: '22.01.2025 06:45',
				comments_count: 6,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l5',
				title: 'Намазда кетирилген катачылыктар',
				time: 7500,
				created_at: '26.01.2025 11:30',
				comments_count: 9,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l6',
				title: 'Намаздагы сүннөт амалдар',
				time: 8100,
				created_at: '28.01.2025 09:00',
				comments_count: 7,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l7',
				title: 'Тахарат жана анын мааниси',
				time: 9000,
				created_at: '02.01.2025 16:00',
				comments_count: 10,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l8',
				title: 'Жума намазынын өзгөчөлүктөрү',
				time: 4697,
				created_at: '08.01.2025 20:30',
				comments_count: 4,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l9',
				title: 'Витр жана нафил намаздар',
				time: 10800,
				created_at: '14.01.2025 10:45',
				comments_count: 11,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l10',
				title: 'Намаздын руханий пайдалары',
				time: 9900,
				created_at: '20.01.2025 13:00',
				comments_count: 5,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l11',
				title: 'Намаздагы дуалар жана зикрлер',
				time: 4697,
				created_at: '30.01.2025 18:30',
				comments_count: 6,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			}
		]
	},

	{
		lId: 'c1',
		module: 2,
		id: 'm1',
		title: '1-модуль: Ыйман',
		description:
			'Ыйман – ислам дининин негизи. Бул бөлүмдө анын негиздери жана мааниси баяндалат.',
		image_src: '',
		progress: 0,
		lessons: [
			{
				id: 'l12',
				title: 'Ыймандын мааниси',
				time: 4697,
				created_at: '05.01.2025 08:30',
				comments_count: 5,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l13',
				title: 'Ыймандын алты негизи',
				time: 7200,
				created_at: '10.01.2025 14:15',
				comments_count: 8,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l14',
				title: 'Ыйман менен амалдын байланышы',
				time: 7800,
				created_at: '15.01.2025 19:00',
				comments_count: 12,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l15',
				title: 'Ыймандын исламдагы орду',
				time: 4697,
				created_at: '20.01.2025 06:45',
				comments_count: 6,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l16',
				title: 'Ыйманды бекемдөө жолдору',
				time: 4697,
				created_at: '22.01.2025 11:30',
				comments_count: 9,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l17',
				title: 'Ыйман жана напси менен күрөшүү',
				time: 4697,
				created_at: '26.01.2025 09:00',
				comments_count: 7,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l18',
				title: 'Ыймандын даражалары',
				time: 8700,
				created_at: '28.01.2025 12:00',
				comments_count: 10,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l19',
				title: 'Ыймансыздыктын себептери',
				time: 4697,
				created_at: '02.02.2025 16:00',
				comments_count: 4,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l20',
				title: 'Куран жана ыйман',
				time: 10200,
				created_at: '08.02.2025 20:30',
				comments_count: 11,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l21',
				title: 'Пайгамбарлардын ыйманы',
				time: 9900,
				created_at: '14.02.2025 10:45',
				comments_count: 5,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l22',
				title: 'Ахыретке ишенүүнүн мааниси',
				time: 10500,
				created_at: '20.02.2025 13:00',
				comments_count: 6,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			}
		]
	},
	{
		lId: 'c1',
		module: 3,
		id: 'm2',
		title: '2-модуль: Вахийдин башталышы',
		description:
			'Бул бөлүмдө Аллах Тааланын пайгамбарларга жиберген вахийи жана анын мазмуну баяндалат.',
		progress: 0,
		image_src: '',
		lessons: [
			{
				id: 'l23',
				title: 'Вахий деген эмне?',
				time: 4200,
				created_at: '01.01.2025 08:30',
				comments_count: 5,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l24',
				title: 'Пайгамбарга түшкөн биринчи вахий',
				time: 6900,
				created_at: '05.01.2025 14:15',
				comments_count: 8,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l25',
				title: 'Вахийдин түрлөрү',
				time: 7500,
				created_at: '10.01.2025 17:00',
				comments_count: 12,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l26',
				title: 'Вахийдин келип чыгуу процессу',
				time: 4697,
				created_at: '15.01.2025 06:45',
				comments_count: 6,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l27',
				title: 'Вахийдин сакталышы жана жайылышы',
				time: 4697,
				created_at: '18.01.2025 11:30',
				comments_count: 9,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l28',
				title: 'Вахийди кабыл алган сахабалар',
				time: 9000,
				created_at: '22.01.2025 09:00',
				comments_count: 7,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l29',
				title: 'Вахий жана илим',
				time: 9900,
				created_at: '25.01.2025 13:00',
				comments_count: 10,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l30',
				title: 'Вахийдин адамзатка тийгизген таасири',
				time: 4697,
				created_at: '30.01.2025 15:45',
				comments_count: 4,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			}
		]
	},
	{
		lId: 'c1',
		module: 4,
		id: 'm3',
		title: '3-модуль: Пайгамбарга вахий келген учурлар',
		description:
			'Бул бөлүмдө пайгамбарга вахий келген учурлар жана анын түрлөрү баяндалат.',
		image_src: '',
		progress: 0,
		lessons: [
			{
				id: 'l31',
				title: 'Вахийдин кандай учурларда келгендиги',
				time: 4697,
				created_at: '02.02.2025 08:30',
				comments_count: 5,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l32',
				title: 'Вахийдин келиш ыкмалары',
				time: 7200,
				created_at: '06.02.2025 14:15',
				comments_count: 8,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l33',
				title: 'Вахийдин таасири жана жыйынтыгы',
				time: 4697,
				created_at: '10.02.2025 17:00',
				comments_count: 12,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l34',
				title: 'Пайгамбарга вахий келгенде анын абалы',
				time: 8400,
				created_at: '13.02.2025 06:45',
				comments_count: 6,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l35',
				title: 'Вахийди жазган сахабалар',
				time: 9000,
				created_at: '17.02.2025 11:30',
				comments_count: 9,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			},
			{
				id: 'l36',
				title: 'Вахий жана Куран',
				time: 4697,
				created_at: '21.02.2025 09:00',
				comments_count: 7,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l37',
				title: 'Вахий жана хадистер',
				time: 4697,
				created_at: '25.02.2025 13:00',
				comments_count: 10,
				image_src: '/images/audio-module-image.png',
				type: 'audio',
				audio_url: '/examples/example-audio.m4a'
			},
			{
				id: 'l38',
				title: 'Вахийден алынган негизги сабактар',
				time: 10800,
				created_at: '28.02.2025 15:45',
				comments_count: 4,
				image_src: '',
				type: 'video',
				video_url: 'https://youtu.be/P3h-yZZcTa0?si=Lq8UAm5z0mi0-OOm'
			}
		]
	}
];

export const example_comments: IModuleComment[] = [
	{
		id: 'mc1',
		user: {
			displayName: 'Alice Johnson',
			avatar: null
		},
		sended_at: '13.02.2025 10:00',
		message: 'This is a great post!'
	},
	{
		id: 'mc2',
		user: {
			displayName: 'Bob Smith',
			avatar: null
		},
		sended_at: '13.02.2025 10:05',
		message: 'I totally agree with this!',
		comments: [
			{
				id: 'mc2-1',
				user: {
					displayName: 'Eleanor Williams',
					avatar: null
				},
				reply_to: 'mc2',
				sended_at: '13.02.2025 10:07',
				message: 'Interesting perspective!'
			},
			{
				id: 'mc2-2',
				user: {
					displayName: 'George Anderson',
					avatar: null
				},
				reply_to: 'mc2',
				sended_at: '13.02.2025 10:10',
				message: 'I have a different opinion on this.'
			}
		]
	},
	{
		id: 'mc3',
		user: {
			displayName: 'Charlie Brown',
			avatar: null
		},
		sended_at: '13.02.2025 10:15',
		message: 'Nice work, keep it up!'
	},
	{
		id: 'mc4',
		user: {
			displayName: 'David Miller',
			avatar: null
		},
		sended_at: '13.02.2025 10:20',
		message: 'Looking forward to more content like this!'
	}
];
