import Breadcrumb from '$/shared/ui/breadcrumb/Breadcrumb';
import React from 'react';
import ProfileImages from './sections/profile-images/ProfileImages';
import ProfileSection from './sections/profile-section/ProfileSection';
import { profiles } from './constants/profile.constants';

const ProfilePage: React.FC = () => {
	return (
		<main>
			<section className='container nopadding'>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Устаз жөнүндө', href: '#this' }
					]}
				/>
			</section>
			<ProfileImages />
			<ProfileSection
				first
				title={profiles['kalyc-zamanbekov'][0].title}
				content={profiles['kalyc-zamanbekov'][0].content}
			/>
			<ProfileSection
				title={profiles['kalyc-zamanbekov'][1].title}
				content={profiles['kalyc-zamanbekov'][1].content}
			/>
			<ProfileSection
				title={profiles['kalyc-zamanbekov'][2].title}
				content={profiles['kalyc-zamanbekov'][2].content}
			/>
		</main>
	);
};

export default ProfilePage;
