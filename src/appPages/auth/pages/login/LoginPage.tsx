import React from 'react';
import styles from './LoginPage.module.scss';
import { LoginWithGoogle } from '$/features/auth'

export const LoginPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<div className={styles.logoIcon}>AH</div>
				<span className={styles.logoText}>Al-Hanafiyyah</span>
			</div>

			<p className={styles.greetingArabic}>السلام عليكم</p>

			<h1 className={styles.welcomeText}>ДОБРО ПОЖАЛОВАТЬ В МИР ЗНАНИЙ</h1>

			<LoginWithGoogle />

			<div className={styles.separator}></div>

			<div className={styles.footerText}>
				<p>СТРЕМЛЕНИЕ К ЗНАНИЯМ - ОБЯЗАННОСТЬ КАЖДОГО МУСУЛЬМАНИНА</p>
				<p>- Хадис</p>
			</div>
		</div>
	);
};
