import React from 'react';
import styles from './CommentSender.module.scss';
import { Svg } from '$/shared/ui/svg/Svg';
export const CommentSender: React.FC = () => {
	return (
		<div className={styles.comment_sender}>
			<h4>Комментарийлер</h4>
			<div className={styles['sender']}>
				<div className={styles['input-field']}>
					<label htmlFor='comment-i'>
						<Svg src='/icon/chats-circle.svg' />
					</label>
					<input
						type='text'
						name='comment-i'
						id='comment-i'
						placeholder='Комментарий жибериңиз'
					/>
				</div>
				<button>Жөнөтүү</button>
			</div>
		</div>
	);
};
