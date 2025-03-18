import { usePathname } from 'next/navigation';
import React from 'react';
import { hiddenPages } from '../../constants/hidden-pages';

export const useHiddenPages = () => {
	const pathname = usePathname();
	return React.useMemo(
		() =>
			hiddenPages.some(pattern =>
				pathname.startsWith(pattern.replace('*', ''))
			),
		[pathname]
	);
};
