import React from 'react';
import styles from './ProfileSection.module.scss';
import clsx from 'clsx';
import SectionTitle from '$/shared/ui/section-title/SectionTitle';
interface IProfileSectionProps {
	title: string;
	content: string;
	first?: boolean;
}

const ProfileSection: React.FC<IProfileSectionProps> = ({
	title,
	content,
	first = false
}) => {
	return (
		<section className={styles.profile_section}>
			<div className={`${styles['container']} container`}>
				<SectionTitle className={styles.title} title={title} type='col' />
				<div
					dangerouslySetInnerHTML={{ __html: content }}
					className={clsx(styles['content'], styles[`f-${first}`])}
				/>
			</div>
		</section>
	);
};

export default ProfileSection;
