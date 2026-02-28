<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    const texts = [
        {
            title: `Творительный падеж — это четвёртый косвенный падеж, обозначающий инструмент, с помощью которого совершается действие. Отвечает на вопросы:`,
            list: style(
`кем? — врачом, подругой, дедушкой;
чем? — ложкой, кистью, узором.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `С существительным в творительном падеже употребляются предлоги — ${style('за, перед, под (подо), с (со), над, меж, между, в связи с, вместе с, согласно с', 'i')}. Например:`,
            list: `гуляем с подругой;
видно за облаками;
дом между деревьями;
выступать перед зрителями.`.split('\n')
        },
    ]

    const additional = `Существительные в творительном падеже употребляются как в качестве прямого дополнения ${style('(украсить гирляндой, рисовать красками)', 'i')}, так с предлогами ${style('(стоять перед зеркалом, стоять между братьями)', 'i')}.`
</script>


<Container>
    <List
        title={texts[0].title}
        classListTitle='left'
        colorTitle="var(--color-texts-main-dark)"
        items={texts[0].list}
        color="var(--color-texts-main-dark)"
        type={['square']}
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
    />
</Container>
