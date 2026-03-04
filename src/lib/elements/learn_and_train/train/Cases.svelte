<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Button from '$lib/components/Button.svelte';
    import List from '$lib/components/List.svelte';

    /* Текстовые переменные */
    const title = 'Интерактивный тренажёр';
    const aboutTrain = 'Потренируйся сам!';

    const guideButton = { title: 'Как пользоваться Тренажёром', href: '/guide'};
</script>

<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer axis="vertical" size="1rem"/>

        <TextBlock title={aboutTrain}/>
        <Spacer axis="vertical" size="3rem"/>

        <iframe 
            src="{base}/pages/games/cases.html"
            title=""
            width="100%"
            style="height: auto; min-height: 675px;"
            frameborder="0"
            scrolling="no"
        ></iframe>
        <Spacer axis="vertical" size="3rem"/>

        <Button 
            title={guideButton.title}
            href={base + guideButton.href}
        />

    </Container>
</div>