export interface ButtonProps extends React.PropsWithChildren {
	variant?: 'solid' | 'outline';
	borderColor?: 'white' | 'black' | 'gray';
	className?: string;
	disabled?: boolean;
	onClick?(e: React.MouseEvent): void;
	linearGradient?: 'v1' | 'v2';
	to?: string;
	type?: "submit" | "button" | "reset" 
}
