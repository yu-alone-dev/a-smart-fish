<script>
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Button from '$lib/components/Button.svelte';

    /* Текстовые переменные */
    const title = "Как это работает?";
    const cards = [
        {
            text: {
                title: 'РАЗДЕЛ "УЧИМ И ИГРАЕМ"',
                description: 'В разделе "Учим и Играем" находятся обучающие материалы и тренажеры по предлогам и падежам для развития предложно-падежных конструкций.'
            },
            button: {
                title: 'Учим и Играем',
                href: '/learn'
            },
            img: 'learn.png'
        },
        {
            text: {
                title: 'РАЗДЕЛ "МАТЕРИАЛЫ"',
                description: 'В разделе "Материалы" находятся дидактические карточки, интерактивные презентации, тесты и задания, которыми можно воспользоваться для дополнительного закрепления навыка.'
            },
            button: {
                title: 'Материалы',
                href: '/materials'
            },
            img: 'materials.png'
        },
        {
            text: {
                title: 'РАЗДЕЛ "ИНСТРУКЦИЯ"',
                description: 'В разделе "Инструкция" находится описание использования тренажера и возможность настройки тренажера.'
            },
            button: {
                title: 'Инструкция',
                href: '/guide'
            },
            img: 'guide.png'
        }
    ];
</script>


<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer axis="vertical" size="5rem"/>
        {#each cards as card, index}
            {#if index > 0}
                <Spacer axis="vertical" line={true} size="2rem" thickness="3px"/>
            {/if}
            <Container orientation="horizontal">
                <Container>
                    <Image page='main' src={card.img}/>
                </Container>
                <Container>
                    <TextBlock 
                        title={card.text.title}
                        description={card.text.description}
                    />
                    <Spacer axis="vertical" size="100%"/>
                    <Button 
                        title={card.button.title}
                        href={card.button.href}
                    />
                </Container>
            </Container>
        {/each}
    </Container>
</div>
