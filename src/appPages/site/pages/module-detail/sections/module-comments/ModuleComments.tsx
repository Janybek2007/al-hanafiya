import {
	CommentList,
	CommentSender,
	example_comments
} from '$/entities/modules';
import React from 'react';
import styles from './ModuleComments.module.scss';
interface IProps {
	moduleId: string;
}

const ModuleComments: React.FC<IProps> = () => {
	return (
		<div className={styles.module_comments}>
			<CommentSender />
			<CommentList comments={example_comments} />
		</div>
	);
};

export default ModuleComments;
