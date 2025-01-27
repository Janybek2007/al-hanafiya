import React from 'react';
import { Articles } from './ui/articles/Articles';
import { Hero } from './ui/hero/Hero';
import { Lessons } from './ui/lessons/Lessons';
import { Meetings } from './ui/meetings/Meetings';
import { QuestionAndAnwser } from './ui/q&a/q&a';

export const HomePage = () => {
	return (
		<main>
			<Hero />
			<Meetings />
			<Lessons />
			<QuestionAndAnwser />
			<Articles />
		</main>
	);
};
