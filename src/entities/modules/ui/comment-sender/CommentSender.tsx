'use client';
import React from 'react';
import styles from './CommentSender.module.scss';
import { Svg } from '$/shared/ui';
import { useComment } from '$/features/comments';

interface IProps {
	replyId?: string;
}

export const CommentSender: React.FC<IProps> = ({ replyId }) => {
	const { handleSendComment } = useComment();
	const [message, setMessage] = React.useState('');

	const handleSend = React.useCallback(() => {
		if (message.trim()) {
			handleSendComment(message, replyId);
			setMessage('');
		}
	}, [message, handleSendComment, replyId]);

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
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
				</div>
				<button onClick={handleSend}>Жөнөтүү</button>
			</div>
		</div>
	);
};
