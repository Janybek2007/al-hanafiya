'use client';
import React, { useState, useRef, useEffect } from 'react';
import scss from './QuestionsSections.module.scss';
import { questions } from '../../constants';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Image from 'next/image';

const QuestionsSections = () => {
	const [expandedQuestions, setExpandedQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const [overflowingQuestions, setOverflowingQuestions] = useState<{
		[key: number]: boolean;
	}>({});
	const textRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

	const toggleExpand = (id: number) => {
		setExpandedQuestions(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	const checkOverflow = (element: HTMLParagraphElement) => {
		return element.scrollHeight > element.clientHeight;
	};

	useEffect(() => {
		const checkTextOverflow = () => {
			questions.forEach(item => {
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
	}, []);

	const setRef = (id: number) => (element: HTMLParagraphElement | null) => {
		if (element) {
			textRefs.current[id] = element;
		}
	};

	return (
		<section className={scss.questions_section}>
			<div className={scss.questions_list}>
				{questions.map(item => {
					const isExpanded = expandedQuestions[item.id];
					const isOverflowing = overflowingQuestions[item.id];

					return (
						<div key={item.id} className={scss.question_item}>
							<div className={scss.question_content}>
								<div className={scss.question_left}>
									<Image
										src={'/images/Q&Apage/message.svg'}
										alt='Message img'
										width={50}
										height={50}
										priority
										quality={70}
									/>
									<div className={scss.text_content}>
										<p
											ref={setRef(item.id)}
											className={`${scss.question_text} ${
												isExpanded ? scss.expanded : ''
											}`}
										>
											{item.question}
										</p>
										{isOverflowing && (
											<button
												className={scss.expand_btn}
												onClick={() => toggleExpand(item.id)}
											>
												{isExpanded ? (
													<>
														Жашыруу <IoIosArrowUp className={scss.arrow_icon} />
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

								<div className={scss.question_right}>
									<button className={scss.view_answer}>
										Жооп көрүү <BsArrowRight className={scss.arrow_right} />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default QuestionsSections;
