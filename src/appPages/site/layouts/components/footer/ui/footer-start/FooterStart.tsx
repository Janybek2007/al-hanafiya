import React from 'react';
import styles from './FooterStart.module.scss';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import Image from 'next/image';

export const FooterStart: React.FC = () => {
	return (
		<div className={styles.footer_start}>
			<nav className={styles.nav}>
				<Link href={paths.teacherProfile}>
					Устаз жөнүндө
				</Link>
				<Link href={paths.lessons.index}>Сабактар</Link>
				<Link href={paths.meetings}>Жолугушуулар</Link>
				<Link href={paths.articles}>Статья</Link>
				<Link href={paths.contacts}>Контактылар</Link>
			</nav>
			<hr className={styles.divider} />
			<div className={styles['social_links']}>
				<a href='#'>
					<Image
						width={20}
						height={19}
						src='/icon/social_links/facebook.svg'
						alt='Facebook Icon'
					/>
				</a>
				<a href='#'>
					<Image
						width={20}
						height={19}
						src='/icon/social_links/instagram.svg'
						alt='Instagram Icon'
					/>
				</a>
				<a href='#'>
					<Image
						width={20}
						height={19}
						src='/icon/social_links/whatsapp.svg'
						alt='Whatsapp Icon'
					/>
				</a>
				<a href='#'>
					<Image
						width={20}
						height={19}
						src='/icon/social_links/telegram.svg'
						alt='Telegram Icon'
					/>
				</a>
			</div>
		</div>
	);
};
