<script>
    import Toolbar from '$lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Learn from '$lib/elements/learn/Learn.svelte';
    import Footer from '$lib/elements/Footer.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
</script>

<Toolbar 
    logoSrc="/icons/favicon.png"
    backgroundColor="var(--color-background-button)"
    textColor="var(--color-texts-main-light)"
    transparentUntilScroll={false}
/>

<!-- Hero на весь экран -->
<Hero 
    imageSrc="/imgs/main/hero-bg.png"
    title="Учим и Играем"
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <Learn/>
    <Spacer axis="vertical" size="3rem"/>
    <Footer/>
</main>