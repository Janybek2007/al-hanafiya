// components/AskQuestionModal/AskQuestionModal.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import scss from './AskQuestionModal.module.scss';
import { IoClose } from 'react-icons/io5';

interface AskQuestionModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const AskQuestionModal: React.FC<AskQuestionModalProps> = ({
	isOpen,
	onClose
}) => {
	const [question, setQuestion] = useState('');
	const [telegram, setTelegram] = useState('');

	if (!isOpen) return null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Здесь будет логика отправки формы
		console.log({ question, telegram });
		onClose();
	};

	return (
		<div className={scss.modal_overlay} onClick={onClose}>
			<div className={scss.modal_content} onClick={e => e.stopPropagation()}>
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
									Подключитесь к нашему боту в Telegram нажав команду "/start"
									ниже
								</li>
								<li>Укажите свой Telegram username или номер телефона</li>
								<li>
									Нажмите кнопку отправить и ждите ответ в Telegram номер
									телефона
								</li>
							</ul>
						</div>
					</div>
				</div>

				<form className={scss.question_section} onSubmit={handleSubmit}>
					<div className={scss.form_group}>
						<textarea
							placeholder='Сурооңузду жазыңыз...'
							value={question}
							onChange={e => setQuestion(e.target.value)}
							required
						/>
					</div>

					<div className={scss.telegram_bot}>
						<p>
							Подключитесь к нашему боту в
							<a
								href='https://t.me/your_bot'
								target='_blank'
								rel='noopener noreferrer'
							>
								Telegram
							</a>
						</p>
					</div>

					<div className={scss.telegram_section}>
						<input
							type='text'
							placeholder='Введите ваш Telegram ID и номер телефона'
							value={telegram}
							onChange={e => setTelegram(e.target.value)}
							required
						/>
					</div>

					<button type='submit' className={scss.submit_btn}>
						Суроо жөнөтүү
					</button>
				</form>
			</div>
		</div>
	);
};

export default AskQuestionModal;
