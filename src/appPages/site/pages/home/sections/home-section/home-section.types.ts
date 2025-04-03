import { ButtonProps } from '$/shared/ui/button/button.types'

export interface HomeSectionProps extends React.PropsWithChildren {
	title: string;
	button?: ButtonProps | string;
	className?: string;
}
