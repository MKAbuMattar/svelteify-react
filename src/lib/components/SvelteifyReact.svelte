<script lang="ts">
	import ReactDOM from 'react-dom/client';
	import React from 'react';
	import { onDestroy, onMount } from 'svelte';

	const element = React.createElement;
	let container;
	let root;

	onMount(() => {
		const { el, children, ...otherProps } = $$props;
		root = ReactDOM.createRoot(container);
		try {
			root.render(element(el, otherProps, children));
		} catch (err) {
			console.warn(`react-wrapper failed to mount.`, { err });
		}
	});

	onDestroy(() => {
		try {
			container && root.unmount();
		} catch (err) {
			console.warn(`react-wrapper failed to unmount.`, { err });
		}
	});
</script>

<div data-type="svelteify-react" bind:this={container} />
