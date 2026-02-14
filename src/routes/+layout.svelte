<script>
	import favicon from 'https://drive.google.com/uc?export=view&id=1hUMTbJdFGmKoLPJ4f0s3oIOyXhFTBHxQ';
	import '$lib/styles/variables.css';
	import '$lib/styles/basic.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
