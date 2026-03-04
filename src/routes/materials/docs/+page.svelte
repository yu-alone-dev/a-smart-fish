<script>
    import Toolbar from '$lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Docs from '$lib/elements/materials/docs/Docs.svelte';
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
    smallVersion="True"
    title="Интерактивные презентации"
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <Docs/>
    <Spacer axis="vertical" size="7rem"/>
    <Footer/>
</main>