<script>
    import { page } from '$app/state';
    import Toolbar from '$lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Tests from '$lib/elements/learn_and_train/train/Tests.svelte';

    $: test_num = (page.url.searchParams.get('test_num') !== null) 
        ? parseInt(page.url.searchParams.get('test_num')) 
        : (page.state?.test_num ?? 0);

    const cases = [
        'Именительный',
        'Родительный',
        'Дательный',
        'Винительный',
        'Творительный',
        'Предложный',
    ];
    const casename = 'падеж';  
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
    title={`${cases[test_num - 1]} ${casename}`}
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <Tests/>
    <Spacer axis="vertical" size="7rem"/>
    <Footer/>
</main>