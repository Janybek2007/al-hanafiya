'use client';
import React from 'react';
import styles from './FooterStart.module.scss';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import { Svg } from '$/shared/ui/svg/Svg';
import { useSize } from '$/shared/utils/use-size';

export const FooterStart: React.FC = () => {
	const size = useSize('#footer_start');
	const windowSize = useSize();
	return (
		<div id='footer_start' className={styles.footer_start}>
			<nav className={styles.nav}>
				<Link href={paths.teacherProfile}>Устаз жөнүндө</Link>
				<Link href={paths.lessons.index}>Сабактар</Link>
				<Link href={paths.meetings}>Жолугушуулар</Link>
				<Link href={paths.articles}>Статья</Link>
				<Link href={paths.contacts}>Контактылар</Link>
			</nav>
			<hr
				style={windowSize.width <= 1024 ? { height: size.height } : {}}
				className={styles.divider}
			/>
			<div className={styles['social_links']}>
				<a href='#'>
					<Svg src='/icon/social_links/facebook.svg' />
				</a>
				<a href='#'>
					<Svg src='/icon/social_links/instagram.svg' />
				</a>
				<a href='#'>
					<Svg src='/icon/social_links/whatsapp.svg' />
				</a>
				<a href='#'>
					<Svg src='/icon/social_links/telegram.svg' />
				</a>
			</div>
		</div>
	);
};
