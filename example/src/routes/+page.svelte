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
