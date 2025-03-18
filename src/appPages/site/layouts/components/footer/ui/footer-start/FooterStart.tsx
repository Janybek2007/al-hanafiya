'use client';
import { Icons } from '$/shared/components';
import { paths } from '$/shared/routing';
import { useSize } from '$/shared/utils/hooks/use-size';
import Link from 'next/link';
import React from 'react';
import styles from './FooterStart.module.scss';

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
				style={windowSize.width <= 650 ? { height: size.height } : {}}
				className={styles.divider}
			/>
			<div className={styles['social_links']}>
				<a href='#'>
					<Icons.Facebook />
				</a>
				<a href='#'>
					<Icons.Instagram />
				</a>
				<a href='#'>
					<Icons.WhatsApp />
				</a>
				<a href='#'>
					<Icons.Telegram />
				</a>
			</div>
		</div>
	);
};
