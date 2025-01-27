import { MeetingsList } from '$/entities/meetings';
import BaseSection from '$/shared/ui/base-section/BaseSection';
import React from 'react';

export const Meetings = () => {
	return (
		<BaseSection title='Жолугушуулар'>
			<MeetingsList />
		</BaseSection>
	);
};
