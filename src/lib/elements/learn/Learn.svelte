<script>
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import Button from '$lib/components/Button.svelte';

    /* Текстовые переменные */
    const title = "Выберите нужный раздел";
    const cards = [
        {
            button1: {
                title: 'Учим предлоги',
                href: '/learn'
            },
            button2: {
                title: 'Тренажер',
                href: '/learn'
            },
            img: 'prewords.png'
        },
        {
            button1: {
                title: 'Учим падежи',
                href: '/learn'
            },
            button2: {
                title: 'Тренажер',
                href: '/learn'
            },
            img: 'case.png'
        }
    ];
</script>


<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer axis="vertical" size="5rem"/>
        <Container orientation="horizontal">
            {#each cards as card, index}
                {#if index > 0}
                    <Spacer axis="vertical" line={true} size="2rem" thickness="3px"/>
                {/if}
                    <Container orientation="vertical">
                        <Image page='learn' src={card.img}/>
                        <Container orientation="horizontal" content="center">
                            <Button 
                                title={card.button1.title}
                                href={card.button1.href}
                            />
                            <Spacer axis="horizontal" size="5rem" thickness="3px"/>
                            <Button 
                                title={card.button2.title}
                                href={card.button2.href}
                            />
                        </Container>
                    </Container>
            {/each}
        </Container>
    </Container>
</div>

