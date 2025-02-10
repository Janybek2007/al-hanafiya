import { ArticlesList } from '$/entities/articles';
import HomeSectionProps from '../home-section/HomeSection';

export const Articles = () => {
	return (
		<HomeSectionProps
			button={{
				children: 'Бардык макалалар',
				linearGradient: 'v2',
				to: '/articles'
			}}
			title='Макалалар'
		>
			<ArticlesList />
		</HomeSectionProps>
	);
};
