import React from 'react';
import styles from './MeetingsList.module.scss';
import { meetings } from '../../constansts/meetings.constants';
import { MeetingCard } from '../meeting-card/MeetingCard';

export const MeetingsList = () => {
	return (
		<div className={styles.meetings_list}>
			{meetings.map(meeting => (
				<MeetingCard key={meeting.id} {...meeting} />
			))}
		</div>
	);
};
