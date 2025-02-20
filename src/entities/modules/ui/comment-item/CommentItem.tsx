'use client';
import { IModuleComment } from '../../types';
import styles from './CommentItem.module.scss';
import Image from 'next/image';
import { Svg } from '$/shared/ui/svg/Svg';
import clsx from 'clsx';
import { CommentSender } from '../comment-sender/CommentSender';
import React from 'react'
interface IProps {
	cm: IModuleComment;
}

export const CommentItem: React.FC<IProps> = ({ cm }) => {
	const [reply, setReply] = React.useState(false);
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
						<span className={styles['date']}>1 күн мурда</span>
					</div>
					<p className={styles.message}>{cm.message}</p>
					<button onClick={() => setReply(p => !p)}>
						<Svg src='/icon/chats-circle.svg' />
						<span>REPLY</span>
					</button>
				</div>
			</div>
			{reply && <CommentSender replyId={cm.id} />}
		</div>
	);
};
