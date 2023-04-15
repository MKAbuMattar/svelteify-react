<script>
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { onDestroy, onMount } from 'svelte';

  const e = React.createElement;
  let container;
  let root;

  onMount(() => {
    const { el, children, ...props } = $$props;
    root = createRoot(container);
    try {
      root.render(e(el, props, children));
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
