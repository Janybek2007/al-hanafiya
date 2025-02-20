import React from 'react';
import styles from './CommentSender.module.scss';
import { Svg } from '$/shared/ui/svg/Svg';

interface IProps {
	replyId?: string;
}

export const CommentSender: React.FC<IProps> = ({ replyId }) => {
	return (
		<div className={styles.comment_sender}>
			{!replyId && <h4>Комментарийлер</h4>}
			<div className={styles['sender']}>
				<div className={styles['input-field']}>
					<label htmlFor='comment-i'>
						<Svg src='/icon/chats-circle.svg' />
					</label>
					<textarea
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
