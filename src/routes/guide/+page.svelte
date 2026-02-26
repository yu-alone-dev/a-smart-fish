<script>
    import Toolbar from '$lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Guide from '$lib/elements/guide/Guide.svelte';
    import Footer from '$lib/components/Footer.svelte';
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
    imageSrc="/imgs/hero-bg.png"
    title="Инструкция"
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <Guide/>
    <Spacer axis="vertical" size="3rem"/>
    <Footer/>
</main>