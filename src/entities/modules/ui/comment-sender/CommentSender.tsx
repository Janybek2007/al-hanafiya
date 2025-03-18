'use client';
import React from 'react';
import styles from './CommentSender.module.scss';
import { useComment } from '$/features/comments';
import { Icons } from '$/shared/components'

interface IProps {
	replyId?: number;
}

export const CommentSender: React.FC<IProps> = ({ replyId }) => {
	const { handleSendComment, setReply } = useComment();
	const [message, setMessage] = React.useState('');

	const handleSend = React.useCallback(async () => {
		if (message.trim()) {
			await handleSendComment(message, replyId);
			setMessage('');
			setReply(null);
		} else {
			alert('Пожалуйста, введите действительное сообщение');
		}
	}, [message, setReply, handleSendComment, replyId]);

	return (
		<div className={styles.comment_sender}>
			{!replyId && <h4>Комментарийлер</h4>}
			<div className={styles['sender']}>
				<div className={styles['input-field']}>
					<label htmlFor='comment-i'>
						<Icons.ChatsCircle/>
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
