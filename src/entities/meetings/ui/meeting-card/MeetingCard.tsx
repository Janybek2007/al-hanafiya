import React from 'react';
import styles from './MeetingCard.module.scss';
import Image from 'next/image';
import { EventItem } from '$/entities/event/types'; 

interface MeetingCardProps extends Omit<EventItem, 'location' | 'event_date'> {
	location: { name: string; address: string }; 
	date: string; 
	forWomenOnly?: boolean; 
	image_src?: string; 
}

export const MeetingCard: React.FC<MeetingCardProps> = ({
	location,
	date,
	description,
	forWomenOnly = false, 
	image_src = '/images/placeholder.jpg' 
}) => {
	return (
		<div className={styles.meeting_card}>
			<figure className={styles.figure}>
				<Image width={402} height={247} src={image_src} alt='Meeting Image' />
			</figure>
			<div className={styles['card_content']}>
				<p>{description}</p>
				<ul>
					{forWomenOnly && (
						<li>
							<figure>
								<Image
									width={26}
									height={29}
									src='/icon/women-restroom.svg'
									alt=''
								/>
							</figure>
							<span>Жолугушуу айымдар үчүн</span>
						</li>
					)}
					{date && (
						<li>
							<figure>
								<Image
									width={21}
									height={25}
									src='/icon/calendar-broken.svg'
									alt=''
								/>
							</figure>
							<span>{date}</span>
						</li>
					)}
					{location.address && (
						<li>
							<figure>
								<Image
									width={21}
									height={25}
									src='/icon/location-outline.svg'
									alt=''
								/>
							</figure>
							<div className={styles.col}>
								<span>{location.name}</span>
								<span>{location.address}</span>
							</div>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};
