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

```svelte
<script lang="ts">
  import { SvelteifyReact } from "svelteify-react";

  export let txt = "Hello from Svelte!";

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

<h1>{txt}</h1>

<p>Counter: {counter}</p>

<div class="btn-group">
  <SvelteifyReact
    el={"button"}
    children={"Increment"}
    className="btn"
    onClick={increment}
  />

  <SvelteifyReact
    el={"button"}
    children={"Decrement"}
    className="btn"
    onClick={decrement}
  />

  <SvelteifyReact
    el={"button"}
    children={"Reset"}
    className="btn"
    onClick={reset}
  />
</div>

<style>
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

- `el` (required): The React element to render, e.g. `button`, `div`, `span`, etc.
- `children` (required): The children of the React element.
- `className` (optional): The class name of the React element.
- `onClick` (optional): The `onClick` event handler of the React element.
- `...props` (optional): Any other props to pass to the React element.

The `SvelteifyReact` component returns a `ReactElement` that can be rendered in Svelte.

## License

This package is licensed under the MIT License.
