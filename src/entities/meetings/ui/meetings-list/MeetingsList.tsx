'use client';
import React from 'react';
import styles from './MeetingsList.module.scss';
import { MeetingCard } from '../meeting-card/MeetingCard';
import { useEventsQuery } from '$/entities/event';
import { EmptyState, Loading } from '$/shared/ui';

export const MeetingsList = () => {
	const { data: event, isLoading, error } = useEventsQuery({});
	const events = event?.results || [];

	if (isLoading) return <Loading />;

	if (error || !event || !Array.isArray(events)) {
		return <div>Жолугушууларды жүктөөдө ката: {error?.toString()}</div>;
	}

	if (events.length === 0) {
		return (
			<EmptyState
				icon='Calendar'
				title='Жолугушуулар жок'
				description='Азыркы учурда пландаштырылган жолугушуулар жок.'
			/>
		);
	}

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
