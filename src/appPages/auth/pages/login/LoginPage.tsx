import React from 'react';
import styles from './LoginPage.module.scss';
import { LoginWithGoogle } from '$/features/auth';
import { AsyncPageProps } from '$/shared/types';
import Link from 'next/link';

export const LoginPage: React.FC<
	AsyncPageProps<[''], ['error', 'callbackUrl']>
> = async ({ searchParams }) => {
	const sp = await searchParams;
	const error = sp?.error;
	const callbackUrl = sp?.callbackUrl;

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<div className={styles.logoIcon}>AH</div>
				<span className={styles.logoText}>Al-Hanafiyyah</span>
			</div>

			<p className={styles.greetingArabic}>السلام عليكم</p>

			<h1 className={styles.welcomeText}>ДОБРО ПОЖАЛОВАТЬ В МИР ЗНАНИЙ</h1>

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
		</div>
	);
};
