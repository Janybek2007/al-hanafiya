'use client';
import { useHiddenPages } from '$/shared/utils/hooks/use-hidden-pages';
import { useSize } from '$/shared/utils/hooks/use-size';
import React, { Suspense } from 'react';
import styles from './Footer.module.scss';
import { FooterEnd } from './ui/footer-end/FooterEnd';
import { FooterStart } from './ui/footer-start/FooterStart';
export const Footer: React.FC = () => {
	const size = useSize('#tabs-bar');
	const windowSize = useSize();

	const isHidden = useHiddenPages();
	return (
		!isHidden && (
			<footer
				style={{ marginBottom: windowSize.width < 1024 ? size.height : 0 }}
				className={styles.footer}
			>
				<div className={styles.container}>
					<FooterStart />
					<Suspense>
						<FooterEnd />
					</Suspense>
				</div>
			</footer>
		)
	);
};
