<script>
    import Toolbar from '$lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Prewords from '$lib/elements/learn_and_train/train/Prewords.svelte';
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
    title="Тренажёр"
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <Prewords/>
    <Spacer axis="vertical" size="3rem"/>
    <Footer/>
</main>