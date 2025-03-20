'use client';
import React, { useState, useRef, useEffect } from 'react';
import scss from './QuestionList.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import clsx from 'clsx';
import { QuestionItem } from '$/entities/questions';
import { formatDate } from '$/shared/utils';

const QuestionList: React.FC<{ list: QuestionItem[] }> = ({ list }) => {
	const [expandedQuestions, setExpandedQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const [overflowingQuestions, setOverflowingQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const textRefs = useRef<{ [key: string]: HTMLElement | null }>({});

	const toggleExpand = React.useCallback((id: number) => {
		setExpandedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
	}, []);

	const checkOverflow = React.useCallback((element: HTMLElement) => {
		return element.scrollHeight > element.clientHeight;
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const checkTextOverflow = () => {
			list.forEach(item => {
				const textElement = textRefs.current[item.id];
				if (textElement) {
					const hasOverflow = checkOverflow(textElement);
					setOverflowingQuestions(prev => ({
						...prev,
						[item.id]: hasOverflow
					}));
				}
			});
		};

		checkTextOverflow();
		window.addEventListener('resize', checkTextOverflow);
		return () => window.removeEventListener('resize', checkTextOverflow);
	}, [checkOverflow, list]);

	return (
		<section data-qls className={scss.questions_section}>
			<div data-ql className={scss.questions_list}>
				{list.map(item => {
					const isExpanded = expandedQuestions[item.id];
					const isOverflowing = overflowingQuestions[item.id];

					return (
						<div key={item.id} className={scss.question_item}>
							<div className={scss.question_content}>
								<div className={scss.question_left}>
									<Image
										src={'/images/Q&Apage/message.svg'}
										alt='Message img'
										width={28}
										height={28}
										priority
										quality={70}
										className={scss.message_img}
									/>
									<div className={scss.column}>
										<div className={scss.content}>
											<div className={scss.text_content}>
												<Link
													href={paths['q&aDetail'](item.id)}
													ref={el => {
														textRefs.current[item.id] = el;
													}}
													className={`${scss.question_text} ${
														isExpanded ? scss.expanded : ''
													}`}
												>
													{item.content}
												</Link>
												{isOverflowing && (
													<button
														className={scss.expand_btn}
														onClick={() => toggleExpand(item.id)}
													>
														{isExpanded ? (
															<>
																Жашыруу{' '}
																<IoIosArrowUp className={scss.arrow_icon} />
															</>
														) : (
															<>
																Толугу менен окуу{' '}
																<IoIosArrowDown className={scss.arrow_icon} />
															</>
														)}
													</button>
												)}
											</div>
										</div>
										<hr />
										<div className={clsx(scss.row, 'flexCenter')}>
											<div className={scss.info_item}>
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
											<div className={`flexCenter ${scss.last}`}>
												{item.is_answered
													? 'Жооп берилди'
													: 'Жооп берилген жок'}{' '}
												<span>{formatDate(item.created_at).DDMMYYYY}</span>
											</div>
										</div>
									</div>
								</div>

								<div className={scss.question_right}>
									<Link
										href={paths['q&aDetail'](item.id)}
										className={clsx(scss.view_answer, {
											[scss.answered]: item.is_answered
										})}
									>
										<Image
											src='/icon/arrow-left.svg'
											alt='Arrow Left Icon'
											width={20}
											height={20}
											className={scss.arrow_right}
										/>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default QuestionList;
