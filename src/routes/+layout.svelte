<script>
	import favicon from '/favicon.png';
	import '$lib/styles/variables.css';
	import '$lib/styles/basic.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
