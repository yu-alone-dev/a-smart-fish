<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    const texts = [
        {
            title: `Предложный падеж — единственный падеж русского языка, формы которого употребляются только с предлогами. Он обозначает место, направление, объект действия. Отвечает на вопросы:`,
            list: style(
`о ком? — о брате, о друге, о маме;
о чём? — о погоде, о космосе, о школе.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `Существительное в форме предложного падежа, как говорит его название, употребляется только с предлогами — ${style('при, в, на, о, об, по', 'i')}. Например:`,
            list: `говорить о погоде;
скучать по маме;
ездить на машине;
купаться в реке;
остаться при мнении.`.split('\n')
        },
    ]
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
</Container>
