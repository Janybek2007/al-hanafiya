'use client';
import React from 'react';
import styles from './MeetingsList.module.scss';
import { MeetingCard } from '../meeting-card/MeetingCard';
import { useEventsQuery } from '$/entities/event';

export const MeetingsList = () => {
	const { data: event } = useEventsQuery({});

	const events = event?.results || [];

	return (
		<div className={styles.meetings_list}>
			{events.map(meeting => {
				const location = {
					name: 'Белгисиз жер',
					address: meeting.location || 'Белгисиз дарек'
				};

				return (
					<MeetingCard
						key={meeting.id}
						id={meeting.id}
						title={meeting.title}
						description={meeting.description}
						date={meeting.event_date}
						location={location}
						created_at={meeting.created_at}
					/>
				);
			})}
		</div>
	);
};
