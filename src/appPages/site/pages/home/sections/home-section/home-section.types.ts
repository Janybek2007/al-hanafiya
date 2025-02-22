import { ButtonProps } from '$/shared/ui'

export interface HomeSectionProps extends React.PropsWithChildren {
	title: string;
	button?: ButtonProps | string;
	className?: string;
}
