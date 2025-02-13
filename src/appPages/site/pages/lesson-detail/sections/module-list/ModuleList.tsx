import React from 'react';
import styles from './ModuleList.module.scss';
import { IModule, ModuleLItem } from '$/entities/modules';

interface IProps {
	modules: IModule[];
}

const ModuleList: React.FC<IProps> = ({ modules }) => {
	return (
		<div className={styles.module_list}>
			{modules.map(m => (
				<ModuleLItem module={m} key={m.id} />
			))}
		</div>
	);
};

export default ModuleList;
