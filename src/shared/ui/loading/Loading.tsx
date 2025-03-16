import React from 'react'
import Icon from '../icon/Icon'

const Loading: React.FC = React.memo(() => {
	return (
		<div className='loaderState'>
			<Icon className={`loaderAnimation`} name='Loader' />
		</div>
	);
});

Loading.displayName = 'Loading';

export default Loading
