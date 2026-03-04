<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    const texts = [
        {
            title: `Дательный падеж — это второй косвенный падеж. Он обозначает направление, место действия, адресата. Отвечает на вопросы:`,
            list: style(
`кому? — дяде, сестре, учительнице;
чему? — празднику, солнцу, лету.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `Предлоги дательного падежа в русском языке указывают на приближение к объекту, предмету, месту действия; к ним относятся предлоги — ${style('к (ко), по', 'i')}. В редких случаях существительные в дательном падеже употребляются с предлогами ${style('благодаря, вопреки, навстречу, согласно, вслед, наперекор, наперерез, подобно, сродни', 'i')}. Например:`,
            list:`подойти к дому;
гулять по парку;
вести себя согласно правилам;
это сродни поражению.`.split('\n')
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
