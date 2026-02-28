<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Button from '$lib/components/Button.svelte';

    /* Текстовые переменные */
    const title = "Материалы для скачивания";
    const description = "Скачивайте, распечатывайте и занимайтесь с удовольствием!";
    const titleSelect = "Выберите нужный раздел";
    const cards = [
        {
            button: { title: 'Вспомогательные карточки', href: '/materials/cards' },
            img: 'cards.png'
        },
        {
            button: { title: 'Интерактивные презентации', href: '/materials/docs' },
            img: 'docs.png'
        },
        {
            button: { title: 'Тесты и задания', href: '/guide' },
            img: 'tests.png'
        }
    ];
</script>


<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer <Spacer axis="vertical" size="1rem"/>
        <TextBlock description={description}/>
        <Spacer <Spacer axis="vertical" line={true} size="3rem" thickness="3px"/>

        <Title title={titleSelect}/>
        <Container orientation="horizontal">
            {#each cards as card, index}
                {#if index > 0}
                    <Spacer axis="horizontal" size="2rem"/>
                {/if}
                <Container>
                    <Image
                        page='materials'
                        src={card.img}
                        size='medium'
                    />
                    <Button 
                        title={card.button.title}
                        href={base + card.button.href}
                    />
                </Container>
            {/each}
        </Container>
    </Container>
</div>
