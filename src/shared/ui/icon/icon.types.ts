export type IconKeysOrProps = IconKeys | IconProps;
export type IconKeys = keyof typeof import('lucide-react');

type IconLProps = import('lucide-react').LucideProps;
export type IconProps = {
	name: IconKeys;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
	c_size?: number;
} & IconLProps;
