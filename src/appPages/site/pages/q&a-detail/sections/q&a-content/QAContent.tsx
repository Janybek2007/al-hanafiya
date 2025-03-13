import React from 'react';
import s from './QAContent.module.scss';
import Image from 'next/image';
import { TEXTS } from './constants';
import clsx from 'clsx';
const QAContent: React.FC = () => {
	return (
		<div className={s.qa_content}>
			<div className={s['share']}>
				<button className='inlineFlexCenter'>
					<Image
						width={24}
						height={24}
						src='/icon/share.svg'
						alt='Share Icon'
					/>
					<span>Болушу</span>
				</button>
			</div>
			<div className={clsx(s['question'], s.content)}>
				<h4>Суроо: </h4>
				<div
					className={s.c}
					dangerouslySetInnerHTML={{ __html: TEXTS.question }}
				/>
			</div>
			<div className={clsx(s['answer'], s.content)}>
				<h4>Жооп: </h4>
				<div
					className={s.c}
					dangerouslySetInnerHTML={{ __html: TEXTS.answer }}
				/>
			</div>
			<div className={clsx(s.row, 'flexCenter')}>
				<div className={s.info_item}>
					<figure>
						<Image
							width={28}
							height={28}
							src={'/icon/view.svg'}
							alt='View Icon'
						/>
					</figure>
					<span>{15}</span>
				</div>
				<h5 className={s.ustaz}>Устаз Калыс Заманбеков</h5>
			</div>
		</div>
	);
};

export default QAContent;
