import Breadcrumb from '$/shared/ui/breadcrumb/Breadcrumb';
import React from 'react';
import ProfileImages from './sections/profile-images/ProfileImages';

const ProfilePage: React.FC = () => {
	return (
		<main>
			<section className='container'>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Устаз жөнүндө', href: '#this' }
					]}
				/>
			</section>
			<ProfileImages />
		</main>
	);
};

export default ProfilePage;
