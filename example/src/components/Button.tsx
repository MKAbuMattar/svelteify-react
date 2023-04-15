import type { ReactNode } from 'react';
import React from 'react';

type Props = {
	className?: string;
	children: ReactNode;
	[x: string]: any;
};

const Button = ({
	className = '',
	children = 'Button from React!',
	...otherProps
}: Props) => {
	return (
		<button className={`${className}`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
