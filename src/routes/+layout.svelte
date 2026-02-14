<script>
	import { base } from '$app/paths';
	import '$lib/styles/variables.css';
	import '$lib/styles/basic.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

{@render children()}
