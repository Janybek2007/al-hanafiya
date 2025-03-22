import React from 'react';
import styles from './AccountHeader.module.scss';
interface IProps {
	title: string;
	subtitle: string;
}

const AccountHeader: React.FC<IProps> = ({ subtitle, title }) => {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	);
};

export default AccountHeader;
