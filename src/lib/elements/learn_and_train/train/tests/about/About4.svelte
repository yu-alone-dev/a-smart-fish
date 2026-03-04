<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    const texts = [
        {
            title: `Винительный падеж в русском языке — третий косвенный падеж, который выражает объект действия и направление действия. Отвечает на вопросы:`,
            list: style(
`кого? — маму, гостей, щенка, друга;
что? — книгу, тарелку, дом, лето.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `К предлогам винительного падежа относятся — ${style('в, за, на, про, через', 'i')}. Реже с формами винительного падежа употребляются предлоги ${style('сквозь, под, по, с, о (об)', 'i')}. Например:`,
            list: `положить на стол;
перейти через дорогу;
рассказать про друга.`.split('\n')
        },
    ]

    const additional = `Для самопроверки перед вопросом можно подставить слово "вижу": ${style('вижу (кого?) маму, вижу (что?) дом', 'i')}.`
</script>


<Container>
    <List
        title={texts[0].title}
        classListTitle='left'
        colorTitle="var(--color-texts-main-dark)"
        items={texts[0].list}
        color="var(--color-texts-main-dark)"
        type={['square']}
        fontSizeTitle='var(--font-size-card-description)'
    />
    <TextBlock
        description={additional}
        classListDescription='left'
        colorDescription='var(--color-texts-main-dark)'
    />
    <List
        title={texts[1].title}
        classListTitle='left'
        colorTitle="var(--color-texts-main-dark)"
        items={texts[1].list}
        color="var(--color-texts-main-dark)"
        type={['square']}
        fontSizeTitle='var(--font-size-card-description)'
    />
</Container>
