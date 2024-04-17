import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
	children: ReactNode;
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
