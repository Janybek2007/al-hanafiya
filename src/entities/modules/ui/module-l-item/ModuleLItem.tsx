import React from 'react';
import { IModule } from '../../types';
import styles from './ModuleLItem.module.scss';
import { secondsToTime } from '$/shared/utils';
import { IoIosCheckmark } from 'react-icons/io';
import { IoPlayOutline } from 'react-icons/io5';
import Link from 'next/link';
interface IProps {
	module: IModule;
}

export const ModuleLItem: React.FC<IProps> = ({ module: m }) => {
	return (
		<div className={styles.module_l_item}>
			<div className={styles['top']}>
				<Link
					href={`/lessons/m/${m.lId}-${m.id}-${m.lessons[0].id}`}
					className={styles['row']}
				>
					{m.id == 'm0' ? (
						<div className={styles.checked}>
							<IoIosCheckmark />
						</div>
					) : (
						<div className={styles.unchecked}>
							<IoPlayOutline />
						</div>
					)}
					<h4 className={styles.title}>{m.title}</h4>
				</Link>
				<p className={styles.desc}>{m.description}</p>
			</div>
			<div className={styles['sub_modules']}>
				{m.lessons.map(sm => (
					<div className={styles.sub_module} key={sm.id}>
						<Link
							href={`/lessons/m/${m.lId}-${m.id}-${sm.id}`}
							className={styles['row']}
						>
							{sm.id == 'm1' ? (
								<div className={styles.checked}>
									<IoIosCheckmark />
								</div>
							) : (
								<div className={styles.unchecked}>
									<IoPlayOutline />
								</div>
							)}
							<h4 className={styles.title}>{sm.title}</h4>
						</Link>
						<span className={styles.time}>{secondsToTime(sm.time)}</span>
					</div>
				))}
			</div>
		</div>
	);
};
