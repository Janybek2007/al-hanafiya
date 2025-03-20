import React from 'react';
import Icon from '../icon/Icon';

const Loading: React.FC<{ color?: 'black' | 'white' }> = React.memo(
	({ color = 'black' }) => {
		return (
			<div className='loaderState'>
				<Icon className={`loaderAnimation ${color}`} name='Loader' />
			</div>
		);
	}
);

Loading.displayName = 'Loading';

export default Loading;
