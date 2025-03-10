'use client';
import { IModuleComment } from '../../types';
import styles from './CommentItem.module.scss';
import Image from 'next/image';
import { Svg } from '$/shared/ui';
import clsx from 'clsx';
import { CommentSender } from '../comment-sender/CommentSender';
import React from 'react';
import { useComment } from '$/features/comments';
import { formatRelativeTime } from '$/shared/utils/formatters/date-formatter'
interface IProps {
	cm: IModuleComment;
}

export const CommentItem: React.FC<IProps> = ({ cm }) => {
	const { setReply, reply } = useComment();
	return (
		<div className={styles['cm']}>
			<div className={styles['content']}>
				<figure>
					{cm.user.avatar ? (
						<Image src={cm.user.avatar} alt={cm.user.displayName} />
					) : (
						<div
							className={clsx(
								'flexCenter',
								styles.placeholder,
								styles.noFamily
							)}
						>
							{cm.user.displayName.slice(0, 1)}
						</div>
					)}
				</figure>
				<div className={styles['info']}>
					<div className={styles['nameAndDate']}>
						<h5>{cm.user.displayName}</h5>
						<div className={styles['dot']}></div>
						<span className={styles['date']}>{formatRelativeTime(cm.sended_at)}</span>
					</div>
					<p className={styles.message}>{cm.message}</p>
					<button onClick={() => setReply(p => (p == null ? cm.id : null))}>
						<Svg src='/icon/chats-circle.svg' />
						<span>REPLY</span>
					</button>
				</div>
			</div>
			{reply === cm.id && <CommentSender replyId={cm.id} />}
		</div>
	);
};
