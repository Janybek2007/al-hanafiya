'use client';
import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LoginWithGoogle } from './ui/login.ui';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '$/shared/utils';
import { closeLoginModal } from '$/shared/redux/slices/login-modal';
import { Icon } from '$/shared/ui';

export const LoginModal: React.FC = ({}) => {
	const sp = useSearchParams();
	const { isOpen } = useAppSelector(s => s.loginModal);
	const dispath = useAppDispatch();
	const error = sp.get('error');
	const callbackUrl = sp.get('callbackUrl');
	const ref = useOutsideClick<HTMLDivElement>(() => dispath(closeLoginModal()));
	return (
		<AnimatePresence initial={false} mode='wait'>
			{isOpen && (
				<div className={styles['modal']}>
					<motion.div
						ref={ref}
						className={styles.container}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
					>
						<button
							className={styles.closeButton}
							onClick={() => dispath(closeLoginModal())}
						>
							<Icon name='X' />
						</button>
						<div className={styles.logo}>
							<div className={styles.logoIcon}>AH</div>
							<span className={styles.logoText}>Al-Hanafiyyah</span>
						</div>

						<p className={styles.greetingArabic}>السلام عليكم</p>

						<h1 className={styles.welcomeText}>
							ДОБРО ПОЖАЛОВАТЬ В МИР ЗНАНИЙ
						</h1>

						{error ? (
							<div className={styles.errorMessage}>
								<p>Произошла ошибка: {error}</p>
								{callbackUrl && (
									<Link href={callbackUrl} className={styles.retryLink}>
										Попробуйте снова
									</Link>
								)}
							</div>
						) : (
							<LoginWithGoogle />
						)}

						<div className={styles.separator}></div>

						<div className={styles.footerText}>
							<p>СТРЕМЛЕНИЕ К ЗНАНИЯМ - ОБЯЗАННОСТЬ КАЖДОГО МУСУЛЬМАНИНА</p>
							<p>- Хадис</p>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
