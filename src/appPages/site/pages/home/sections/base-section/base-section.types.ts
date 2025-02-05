import { ButtonProps } from '../button/button.types';

export interface BaseSectionProps extends React.PropsWithChildren {
	title: string;
	button?: ButtonProps | string;
	className?: string
}
