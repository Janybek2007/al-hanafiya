import { MeetingsList } from '$/entities/meetings';
import React from 'react';
import BaseSection from '../base-section/BaseSection';
export const Meetings = () => {
	return (
		<BaseSection title='Жолугушуулар'>
			<MeetingsList />
		</BaseSection>
	);
};
