import React from 'react';
import styles from './ModuleList.module.scss';
import { ModuleLItem } from '$/entities/modules';
import { ModulesResponse } from '$/entities/modules/types';

interface IProps {
	modules: ModulesResponse;
}

const ModuleList: React.FC<IProps> = ({ modules }) => {
	return (
		<div className={styles.module_list}>
			{modules.results.map(m => (
				<ModuleLItem module={m} key={m.id} />
			))}
		</div>
	);
};

export default ModuleList;
