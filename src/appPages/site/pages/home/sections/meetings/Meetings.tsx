import { MeetingsList } from '$/entities/meetings';
import HomeSectionProps from '../home-section/HomeSection';
export const Meetings = () => {
	return (
		<HomeSectionProps title='Жолугушуулар'>
			<MeetingsList />
		</HomeSectionProps>
	);
};
