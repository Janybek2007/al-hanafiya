'use client';
import styles from './CommentItem.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { CommentSender } from '../comment-sender/CommentSender';
import React, { useState } from 'react';
import { useComment } from '$/features/comments';
import { formatDate } from '$/shared/utils';
import {
	useLikeCommentMutation,
	type CommentItem as IComment
} from '$/entities/comments';
import { ApiMedia } from '$/shared/constants/url.constants';
import { Icons } from '$/shared/components';
import { Icon } from '$/shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { parseAsString, useQueryState } from 'nuqs';

interface IProps {
	cm: Omit<IComment, 'replies'>;
}

export const CommentItem: React.FC<IProps> = ({ cm }) => {
	const { setReply, reply, lessonSlug } = useComment();
	const [mutate] = useLikeCommentMutation();
	const [isAnimating, setIsAnimating] = useState(false);
	const [_reply, _setReply] = useQueryState('reply', parseAsString);

	const handleLike = React.useCallback(async () => {
		if (!lessonSlug) return;
		setIsAnimating(true);
		await mutate({ data: { comment_id: cm.id }, slug: lessonSlug }).unwrap();
		setTimeout(() => setIsAnimating(false), 1000);
	}, [mutate, cm, lessonSlug]);

	React.useEffect(() => {
		if (_reply) {
			document.getElementById(_reply)?.scrollIntoView({ behavior: 'smooth' });
			setTimeout(() => {
				_setReply(null);
			}, 2000);
		}
	}, [_reply, _setReply]);

	return (
		<div
			id={`${cm.username}-${cm.id}`}
			className={clsx(
				styles['cm'],
				_reply === `${cm.username}-${cm.id}` && styles.active
			)}
		>
			<div className={styles['content']}>
				<figure>
					{cm.avatar ? (
						<Image
							width={32}
							height={32}
							quality={100}
							loading='lazy'
							src={ApiMedia(cm.avatar)}
							alt={cm.username}
						/>
					) : (
						<div
							className={clsx(
								'flexCenter',
								styles.placeholder,
								styles.noFamily
							)}
						>
							{cm.username.slice(0, 1)}
						</div>
					)}
				</figure>
				<div className={styles['info']}>
					<div className={styles['nameAndDate']}>
						<h5>{cm.username}</h5>
						<div className={styles['dot']}></div>
						<span className={styles['date']}>
							{formatDate(cm.created_at).timeAgo} назад
						</span>
					</div>

					<p className={styles.message}>
						{cm.reply && (
							<span
								onClick={() => _setReply(`${cm.reply?.username}-${cm.parent}`)}
								className={styles.reply}
							>
								@{cm.reply?.username}
							</span>
						)}{' '}
						{cm.content}
					</p>
					<div className={styles['actions']}>
						<button onClick={() => setReply(p => (p == null ? cm.id : null))}>
							<Icons.ChatsCircle />
							<span>Ответить</span>
						</button>
						<motion.div className={styles.likeWrapper}>
							<motion.button
								onClick={handleLike}
								className={clsx(
									styles.likeBtn,
									cm.has_user_liked && styles.active
								)}
								whileTap={{ scale: 0.9 }}
							>
								<Icon name='ThumbsUp' />
								<span>{cm.like_count} Нравится</span>
							</motion.button>

							<AnimatePresence>
								{isAnimating && cm.has_user_liked && (
									<>
										{[...Array(5)].map((_, i) => (
											<motion.div
												key={i}
												className={styles.likeParticle}
												initial={{ opacity: 0.8, scale: 0.1, x: 0, y: 0 }}
												animate={{
													opacity: 0,
													scale: 0.5,
													x: Math.random() * 60 - 30,
													y: -40 - Math.random() * 40
												}}
												exit={{ opacity: 0 }}
												transition={{
													duration: 0.8 + Math.random() * 0.5,
													ease: 'easeOut'
												}}
											>
												<Icon name='ThumbsUp' />
											</motion.div>
										))}
									</>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
				</div>
			</div>
			{reply === cm.id && <CommentSender replyId={cm.id} />}
		</div>
	);
};
