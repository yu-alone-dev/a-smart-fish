<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    const texts = [
        {
            title: `Родительный падеж существительного отвечает на вопросы: кого? чего? Это первый падеж, который входит в разряд косвенных.`,
            list: style(
`нет (кого?) — дяди,  сестры, учительницы;
нет (чего?) — карандаша, снега, грусти, чашки.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `Все косвенные падежи, кроме предложного, могут употребляться как с предлогами, так и без них, например:`,
            list: style(
`нет (чего?) школы — стою (у чего?) у школы;
нет (чего?) реки — живу (у чего?) у реки.`,
'i',).split('\n').map(line => {return style(line, 'i')})
        },
    ]

    const additional = `Предлоги уточняют значение падежей. Так, с родительным падежом для обозначения отсутствия предмета, указания места, причины, цели употребляются предлоги: ${style('от, до, для, из-за, у, без, ради, вокруг, около и др', 'i')}.`
</script>


<Container>
    {#each texts as text}
        <List
            title={text.title}
            classListTitle='left'
            colorTitle="var(--color-texts-main-dark)"
            items={text.list}
            color="var(--color-texts-main-dark)"
            type={['square']}
            fontSizeTitle='var(--font-size-card-description)'
        />
    {/each}
    <TextBlock
        description={additional}
        classListDescription='left'
        colorDescription='var(--color-texts-main-dark)'
    />
</Container>
