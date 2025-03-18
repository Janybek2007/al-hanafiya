'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import styles from './styles.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

export const LoginWithGoogle: React.FC = () => {
	const { push: navigate } = useRouter();
	const handleLogin = React.useCallback(async () => {
		try {
			await signIn('google');
			navigate('/account/me');
		} finally {
		}
	}, [navigate]);
	return (
		<button className={styles.googleLoginButton} onClick={handleLogin}>
			<span className={styles.icon}>
				<FcGoogle />
			</span>
			<span className={styles.text}>Войти через Google</span>
		</button>
	);
};
