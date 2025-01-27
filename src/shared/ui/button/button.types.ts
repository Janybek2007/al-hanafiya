export interface ButtonProps extends React.PropsWithChildren {
	variant?: 'solid' | 'outline';
	className?: string;
	disabled?: boolean;
	onClick?(e: React.MouseEvent): void;
	linearGradient?: 'v1' | 'v2';
}
