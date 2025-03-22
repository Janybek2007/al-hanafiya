import React from 'react';
import styles from './styles.module.scss';
import { useUpdateAccount } from './context';
import { Icon } from '$/shared/ui';
import { ApiMedia } from '$/shared/constants/url.constants';
import Image from 'next/image';

export const UpdateAccount: React.FC = () => {
	const {
		errors,
		onSubmit,
		register,
		canSubmit,
		isLoading,
		values,
		selectFile,
		avatar
	} = useUpdateAccount();

	return (
		<form onSubmit={onSubmit}>
			<div className={styles.top}>
				<div className={styles.profileImage}>
					{avatar ? (
						<figure>
							<Image
								width={100}
								height={100}
								src={
									typeof avatar === 'string'
										? ApiMedia(avatar)
										: URL.createObjectURL(avatar)
								}
								alt='Колдонуучунун профилинин сүрөтү'
							/>
						</figure>
					) : (
						<div className={styles.imagePlaceholder}>
							{values?.username.slice(0, 1)}
						</div>
					)}
					<label htmlFor='avatarChange' className={styles.addButton}>
						+
					</label>
					<input
						id='avatarChange'
						name='avatar'
						hidden
						type='file'
						onChange={selectFile}
					/>
				</div>
				<div className={styles['formGroups']}>
					{[
						{ label: 'Аты', field: 'first_name' },
						{ label: 'Фамилиясы', field: 'last_name' }
					].map(v => (
						<div key={v.field} className={styles.formGroup}>
							<label>{v.label}</label>
							<input type='text' {...register(v.field as 'username')} />
							{errors[v.field as 'username'] && (
								<span className={styles.error}>
									{errors[v.field as 'username']?.message}
								</span>
							)}
						</div>
					))}
				</div>
			</div>

			<div className={styles.form}>
				{[
					{ label: 'Email', field: 'email', type: 'email' },
					{ label: 'Telegram', field: 'profile.telegram', type: 'text' }
				].map(v => (
					<div key={v.field} className={styles.formGroup}>
						<label>{v.label}</label>
						<input
							type={v.type}
							{...register(v.field as 'username', {
								...(v.field === 'profile.telegram'
									? { setValueAs: (value: string) => value.replace('@', '') }
									: {})
							})}
						/>
					</div>
				))}
				<div className={styles.tgInfo}>
					{values.profile?.telegram && values.profile.telegram.trim() !== '' ? (
						<>
							<Icon className={styles.icon} name='Check' /> Telegram-бот
							активдештирилди
						</>
					) : (
						<>
							<Icon className={styles.icon} name='X' /> Telegram-бот
							активдештирилген жок
						</>
					)}
				</div>
			</div>
			<button disabled={!canSubmit} className={styles.saveButton}>
				{isLoading && (
					<Icon className={`loaderAnimation white`} name='Loader' />
				)}
				Сактоо
			</button>
		</form>
	);
};

export default UpdateAccount;
