import type { ReactNode } from 'react';
import React from 'react';

type Props = {
	className?: string;
	children: ReactNode;
	[x: string]: any;
};

const Title = ({
	className = '',
	children = 'Hello from React!',
	...otherProps
}: Props) => {
	return (
		<h2 className={`${className}`} {...otherProps}>
			{children}
		</h2>
	);
};

export default Title;
