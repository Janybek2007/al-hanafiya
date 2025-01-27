import React from 'react';
import { Articles } from './sections/articles/Articles';
import { Hero } from './sections/hero/Hero';
import { Lessons } from './sections/lessons/Lessons';
import { Meetings } from './sections/meetings/Meetings';
import { QuestionAndAnwser } from './sections/q&a/q&a';

export const HomePage = () => {
	return (
		<main>
			<Hero />
			<div className='main-page_bg'>
				<Meetings />
				<Lessons />
				<QuestionAndAnwser />
				<Articles />
			</div>
		</main>
	);
};
