import React from 'react';
import styles from './ProfileSL.module.scss';
import { profiles } from '../../constants/profile.constants';
import Image from 'next/image';
const ProfielSL: React.FC = () => {
	const social_links = profiles['kalyc-zamanbekov'][3].social_links;
	return (
		<section className={styles.profilesl_section}>
			<div className={`${styles['container']} container`}>
				<h5 className={styles.to_contact}>Байланыш үчүн :</h5>
				<div className={styles['social_links']}>
					<a href={social_links?.facebook}>
						<Image
							width={24}
							height={24}
							src='/icon/social_links/facebook-colored.svg'
							alt='Facebook Icon'
						/>
					</a>
					<a href={social_links?.instagram}>
						<Image
							width={24}
							height={24}
							src='/icon/social_links/instagram-colored.svg'
							alt='Instagram Icon'
						/>
					</a>
					<a href={social_links?.whatsapp}>
						<Image
							width={24}
							height={24}
							src='/icon/social_links/whatsapp-colored.svg'
							alt='Whatsapp Icon'
						/>
					</a>
					<a href={social_links?.telegram}>
						<Image
							width={24}
							height={24}
							src='/icon/social_links/telegram-colored.svg'
							alt='Telegram Icon'
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProfielSL;
