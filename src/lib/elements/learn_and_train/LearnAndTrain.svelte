<script>
    import { base } from '$app/paths';
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
                href: '/learn_and_train/learn/prewords'
            },
            button2: {
                title: 'Тренажёр',
                href: '/learn_and_train/train/prewords'
            },
            img: 'prewords.png'
        },
        {
            button1: {
                title: 'Учим падежи',
                href: '/learn_and_train/learn/cases'
            },
            button2: {
                title: 'Тренажёр',
                href: '/learn_and_train/train/cases'
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
                    <Spacer axis="horizontal" size="2rem"/>
                {/if}
                    <Container orientation="vertical">
                        <Image page='learn_and_train' src={card.img}/>
                        
                        <Container orientation="vertical" content="center">
                            <div class="buttons_style">
                            <Button 
                                title={card.button1.title}
                                href={base + card.button1.href}
                            />
                            <Spacer axis="vertical" size="1rem"/>
                            <Button 
                                title={card.button2.title}
                                href={base + card.button2.href}
                            />
                            </div>
                        </Container>
                    </Container>
            {/each}
        </Container>
    </Container>
</div>

<style>
.buttons_style {
    padding: 0px 40px;
}
</style>

