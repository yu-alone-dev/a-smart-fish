<script>
    import { base } from '$app/paths';
    import { page } from '$app/state';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Iframe from '$lib/components/Iframe.svelte';
    import Questions from './tests/Questions.svelte';
    import About1 from './tests/about/About1.svelte';
    import About2 from './tests/about/About2.svelte';
    import About3 from './tests/about/About3.svelte';
    import About4 from './tests/about/About4.svelte';
    import About5 from './tests/about/About5.svelte';
    import About6 from './tests/about/About6.svelte';

    const components = [
        About1,
        About2,
        About3,
        About4,
        About5,
        About6
    ];

    $: test_num = (page.url.searchParams.get('test_num') !== null) 
        ? parseInt(page.url.searchParams.get('test_num')) 
        : (page.state?.test_num ?? 0);
</script>

<div class="center">
    <Container class="cards">
        <Questions/>
        <Spacer <Spacer axis="vertical" line={true} size="3rem" thickness="3px"/>
        <svelte:component this={components[test_num - 1]} />
        <Spacer <Spacer axis="vertical" line={true} size="3rem" thickness="3px"/>
        <iframe 
            src="{base}/pages/tests/test_{test_num}.html"
            title=""
            width="100%"
            style="height: auto; min-height: 3600px;"
            frameborder="0"
            scrolling="yes"
        ></iframe>

    </Container>
</div>