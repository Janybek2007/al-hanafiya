'use client';
import React, { useState, useRef, useEffect } from 'react';
import scss from './QuestionList.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import clsx from 'clsx';
import { QuestionsResponse } from '$/entities/questions';

const QuestionList: React.FC<{ data: QuestionsResponse }> = ({ data }) => {
	const [expandedQuestions, setExpandedQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const [overflowingQuestions, setOverflowingQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const textRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

	const toggleExpand = React.useCallback((id: number) => {
		setExpandedQuestions(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	}, []);

	const checkOverflow = React.useCallback((element: HTMLParagraphElement) => {
		return element.scrollHeight > element.clientHeight;
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const checkTextOverflow = () => {
			data.results.forEach(item => {
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
	}, [checkOverflow, data]);

	const setRef = React.useCallback(
		(id: number) => (element: HTMLParagraphElement | null) => {
			if (element) {
				textRefs.current[id] = element;
			}
		},
		[]
	);

	return (
		<section data-qls className={scss.questions_section}>
			<div data-ql className={scss.questions_list}>
				{data.results.map(item => {
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
												<p
													ref={setRef(item.id)}
													className={`${scss.question_text} ${
														isExpanded ? scss.expanded : ''
													}`}
												>
													{item.content}
												</p>
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
											<span>25.01.2025</span>
										</div>
									</div>
								</div>

								<div className={scss.question_right}>
									<Link
										href={paths['q&aDetail'](item.id)}
										className={scss.view_answer}
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
