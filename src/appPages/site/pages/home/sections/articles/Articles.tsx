import { ArticlesList } from '$/entities/articles';
import BaseSection from '$/shared/ui/base-section/BaseSection';
import React from 'react';

export const Articles = () => {
	return (
		<BaseSection
			button={{ children: 'Бардык макалалар', linearGradient: 'v2' }}
			title='Макалалар'
		>
			<ArticlesList />
		</BaseSection>
	);
};
