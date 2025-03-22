'use client';
import React from 'react';
import s from './SettingsPage.module.scss';
import {
	DeepPartial,
	NotificationSettings,
	useNotificationSettingsQuery,
	useUpdateNotificationSettingsMutation
} from '$/entities/notifications';
import { Icon } from '$/shared/ui';
import { useForm } from 'react-hook-form';
import { AccountHeader } from '../../layouts/components';

const SettingsPage: React.FC = () => {
	const { data } = useNotificationSettingsQuery();
	const [mutate, { isLoading }] = useUpdateNotificationSettingsMutation();

	const { register, handleSubmit, watch } = useForm<
		DeepPartial<NotificationSettings>
	>({ values: data });

	const values = watch();

	React.useEffect(() => {
		if (values.push_enabled !== undefined) {
			localStorage.setItem('push_enabled', JSON.stringify(values.push_enabled));
		}
	}, [values]);

	const onSubmit = (formData: DeepPartial<NotificationSettings>) => {
		mutate(formData);
	};

	return (
		<section className={s.wrapper}>
			<AccountHeader
				title='Жөндөөлөр'
				subtitle='Билдирүү жөндөөлөрүңүздү бул жерден башкарыңыз.'
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={s.settings}>
				<div className={s.item}>
					<span>Push</span>
					<label className={s.switch}>
						<input type='checkbox' {...register('push_enabled')} />
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Электрондук почта</span>
					<label className={s.switch}>
						<input type='checkbox' {...register('email_enabled')} />
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Суроо-Жооп</span>
					<label className={s.switch}>
						<input
							type='checkbox'
							{...register('notification_types.question_answer')}
						/>
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Комментарий Жообу</span>
					<label className={s.switch}>
						<input
							type='checkbox'
							{...register('notification_types.comment_reply')}
						/>
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Жаңы Сабак</span>
					<label className={s.switch}>
						<input
							type='checkbox'
							{...register('notification_types.new_lesson')}
						/>
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Жаңы Окуя</span>
					<label className={s.switch}>
						<input
							type='checkbox'
							{...register('notification_types.new_event')}
						/>
						<span className={s.slider}></span>
					</label>
				</div>

				<div className={s.item}>
					<span>Система</span>
					<label className={s.switch}>
						<input type='checkbox' {...register('notification_types.system')} />
						<span className={s.slider}></span>
					</label>
				</div>

				<button disabled={isLoading} type='submit' className={s.saveButton}>
					{isLoading && (
						<Icon className={`loaderAnimation white`} name='Loader' />
					)}
					Сактоо
				</button>
			</form>
		</section>
	);
};

export default SettingsPage;
