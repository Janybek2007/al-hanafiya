import React from 'react';
import { Articles } from './sections/articles/Articles';
import { Hero } from './sections/hero/Hero';
import { Lessons } from './sections/lessons/Lessons';
import { Meetings } from './sections/meetings/Meetings';
import { Questions } from './sections/questions/Questions';

const HomePage: React.FC = () => {
	return (
		<main>
			<Hero />
			<div className='main'>
				<Meetings />
				<Lessons />
				<Questions />
				<Articles />
			</div>
		</main>
	);
};

export default HomePage;
