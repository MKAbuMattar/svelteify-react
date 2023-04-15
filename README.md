# svelteify-react

`svelteify-react` is a Svelte component wrapper for React. It allows you to use React components in Svelte.

## Installation

To install `svelteify-react`, use the following command:

```bash
# npm
npm install --save svelteify-react

# yarn
yarn add svelteify-react

# pnpm
pnpm add svelteify-react
```

## Usage

### Prerequisites

This package requires the following:

- Create a SvelteKit project
- Install `react` and `react-dom` as dependencies
- Install `@types/react` and `@types/react-dom` as dev dependencies

```bash
# npm
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom

# yarn
yarn add react react-dom
yarn add --dev @types/react @types/react-dom

# pnpm
pnpm add react react-dom
pnpm add --dev @types/react @types/react-dom
```

### Setup

To use `svelteify-react`, you need to do the following:

- in each React component, add the following line at the top of the file:

```tsx
import React from 'react';
```

### Example

```tsx
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
```

```tsx
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
```

```svelte
<script lang="ts">
	import { SvelteifyReact } from 'svelteify-react';

	import Title from '../components/Title';
	import Button from '../components/Button';

	export let txt = 'Hello from Svelteify React!';

	export let counter = 0;

	export let increment = () => {
		counter += 1;
	};

	export let decrement = () => {
		counter -= 1;
	};

	export let reset = () => {
		counter = 0;
	};
</script>

<main>
	<SvelteifyReact el={Title} children={txt} className="title" />

	<p>Counter: {counter}</p>

	<div class="btn-group">
		<SvelteifyReact
			el={Button}
			children={'Increment'}
			className="btn"
			onClick={increment}
		/>

		<SvelteifyReact
			el={Button}
			children={'Decrement'}
			className="btn"
			onClick={decrement}
		/>

		<SvelteifyReact
			el={'button'}
			children={'Reset'}
			className="btn"
			onClick={reset}
		/>
	</div>
</main>

<style>
	:global(.title) {
		font-size: 24px;
		font-weight: 500;
		color: #3f51b5;
	}

	.btn-group {
		display: flex;
		gap: 0.25rem;
	}

	:global(.btn) {
		background-color: #3f51b5;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 8px 16px;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
	}
</style>
```

Example: [svelteify-react-example](https://github.com/MKAbuMattar/svelteify-react/tree/main/example)

## API

### SvelteifyReact

```svelte
<SvelteifyReact
  el={string}
  children={any}
  className={string}
  onClick={function}
  {...props}
/>
```

This component is a wrapper for React components. It accepts the following props:

- `el` (required): The React element to render, or the name of the React element, or the React component.
- `children` (required): The children of the React element.
- `className` (optional): The class name of the React element.
- `onClick` (optional): The `onClick` event handler of the React element.
- `...props` (optional): Any other props to pass to the React element.

The `SvelteifyReact` component returns a `ReactElement` that can be rendered in Svelte.

## License

This package is licensed under the MIT License.
