import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
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
