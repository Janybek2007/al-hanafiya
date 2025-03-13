'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import scss from './AskQuestion.module.scss';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useDerived } from '$/shared/utils';
import { Button } from '$/shared/ui';
import Link from 'next/link'
import { paths } from '$/shared/routing'

interface AskQuestionProps {
	isOpen: boolean;
	onClose: () => void;
}

interface Question {
	title: string;
	description: string;
	id: string;
}

const questions: Question[] = [
	{
		title: 'Как правильно совершать намаз?',
		description: 'Намаз следует совершать пять раз в день...',
		id: 'q&a-1'
	},
	{
		title: 'Как правильно совершать намаз?',
		description: 'Намаз следует совершать пять раз в день...',
		id: 'q&a-2'
	}
];

const AskQuestion: React.FC<AskQuestionProps> = ({ isOpen, onClose }) => {
	const [questionTerm, setQuestionTerm] = useState('');
	const [isDropdownAbove, setIsDropdownAbove] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const filteredQuestions = useDerived<Question[]>(() => {
		return questions.filter(
			v =>
				v.title.toLowerCase().includes(questionTerm.toLowerCase()) ||
				v.description.toLowerCase().includes(questionTerm.toLowerCase())
		);
	}, [questionTerm]);

	const handleSubmit = React.useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			onClose();
		},
		[onClose]
	);

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

				<form className={scss.question_section} onSubmit={handleSubmit}>
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
										onClick={() => setQuestionTerm(q.title)}
									>
										<div className={scss.info}>
											<strong>{q.title}</strong>
											<p>{q.description.slice(0, 50)}...</p>
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

					<Button type='submit' className={scss.submit_btn}>
						Суроо жөнөтүү
					</Button>
				</form>
			</div>
		)
	);
};

export default AskQuestion;
