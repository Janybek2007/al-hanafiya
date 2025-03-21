'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import scss from './AskQuestion.module.scss';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useDerived } from '$/shared/utils';
import { Button, Icon } from '$/shared/ui';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import {
	QuestionItem,
	useNewQuestionMutation,
	useQuestionSimilarCheckQuery
} from '$/entities/questions';

interface AskQuestionProps {
	isOpen: boolean;
	onClose: () => void;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ isOpen, onClose }) => {
	const [questionTerm, setQuestionTerm] = useState('');
	const [isDropdownAbove, setIsDropdownAbove] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { data } = useQuestionSimilarCheckQuery({ text: questionTerm });

	const [newQuestion, { isLoading: pending }] = useNewQuestionMutation();

	const [filteredQuestions] = useDerived<QuestionItem[]>(() => {
		if (!data?.similar_questions) return [] as QuestionItem[];
		return data.similar_questions.filter(v =>
			v.content.toLowerCase().includes(questionTerm.toLowerCase())
		);
	}, [questionTerm, data]);

	const newQuestionClick = React.useCallback(async () => {
		if (questionTerm.trim() == '') {
			alert('Поле вопроса не должно быть пустым');
			return;
		}

		const response = await newQuestion({
			data: { content: questionTerm }
		}).unwrap();
		console.log(response);
		if ('similar_questions' in response) {
		} else {
		}
	}, [newQuestion, questionTerm]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

			const updateDropdownPosition = () => {
				if (inputRef.current && dropdownRef.current) {
					const inputRect = inputRef.current.getBoundingClientRect();
					const dropdownHeight =
						dropdownRef.current.getBoundingClientRect().height || 200;
					const viewportHeight = window.innerHeight;

					const spaceBelow = viewportHeight - inputRect.bottom;
					const spaceAbove = inputRect.top;

					setIsDropdownAbove(
						spaceBelow < dropdownHeight && spaceAbove > spaceBelow
					);
				}
			};

			updateDropdownPosition();
			window.addEventListener('resize', updateDropdownPosition);
			return () => window.removeEventListener('resize', updateDropdownPosition);
		} else {
			setQuestionTerm('');
		}
	}, [isOpen, questionTerm]);

	return (
		isOpen && (
			<div className={scss.ask_question}>
				<button className={scss.close_btn} onClick={onClose}>
					<IoClose />
				</button>

				<div className={scss.instruction_box}>
					<div className={scss.modal_header}>
						<Image
							src='/images/Q&Apage/question_img.svg'
							alt='Question icon'
							width={68}
							height={70}
						/>
					</div>
					<div className={scss.text_instruction}>
						<h3>Кантип суроо беруу керек:</h3>
						<div className={scss.steps_container}>
							<div className={scss.line}>
								<div className={scss.dot}></div>
								<div className={scss.vertical_line}></div>
								<div className={scss.dot}></div>
								<div className={scss.vertical_line}></div>
								<div className={scss.dot}></div>
								<div className={scss.vertical_line}></div>
								<div className={scss.dot}></div>
							</div>
							<ul>
								<li>Напишите свой вопрос в поле ниже</li>
								<li>
									Подключитесь к нашему боту в Telegram нажав команду{' '}
									{'"/start"'} ниже
								</li>
								<li>Укажите свой Telegram username или номер телефона</li>
								<li>Нажмите кнопку отправить и ждите ответ в Telegram</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={scss.question_section}>
					<div className={scss.form_group}>
						<input
							ref={inputRef}
							placeholder='Сурооңузду жазыңыз...'
							value={questionTerm}
							onChange={e => setQuestionTerm(e.target.value)}
							required
							autoFocus
						/>
						{filteredQuestions.length > 0 && questionTerm.trim() !== '' && (
							<motion.div
								ref={dropdownRef}
								initial={{ opacity: 0, y: isDropdownAbove ? 10 : -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: isDropdownAbove ? 10 : -10 }}
								transition={{ duration: 0.2 }}
								className={`${scss.suggestions_dropdown} ${
									isDropdownAbove ? scss.above : scss.below
								}`}
							>
								<h4 className={scss.suggestion_title}>
									Похожие вопросы, на которые уже есть ответ:
								</h4>
								{filteredQuestions.map(q => (
									<Link
										href={paths['q&aDetail'](q.id)}
										key={q.id}
										className={scss.suggestion_item}
									>
										<div className={scss.info}>
											{/* <strong>{q.title}</strong> */}
											<p>{q.content.slice(0, 50)}...</p>
										</div>
										<Image
											src='/icon/arrow-left.svg'
											alt='Arrow Left Icon'
											width={20}
											height={20}
											className={scss.arrow_icon}
										/>
									</Link>
								))}
							</motion.div>
						)}
					</div>

					<Button
						disabled={pending}
						onClick={newQuestionClick}
						className={scss.submit_btn}
					>
						{pending && (
							<Icon className={`loaderAnimation mr white`} name='Loader' />
						)}
						{pending ? 'Жөнөтүлүүдө...' : 'Суроо жөнөтүү'}
					</Button>
				</div>
			</div>
		)
	);
};

export default AskQuestion;
