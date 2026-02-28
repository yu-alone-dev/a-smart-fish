<script>
    import Container from '$lib/components/Container.svelte';
    import List from '$lib/components/List.svelte';
    import { style } from '$lib/utils/texts'
    import { linear } from 'svelte/easing';

    const texts = [
        {
            title: `Именительный падеж используется для названия предметов. Это начальная форма существительного, отвечающая на вопросы:`,
            list: style(
`кто? — ученик, бабушка, врач, кошка;
что? — ветер, парта, тарелка, книга.`,
'i', [], [/—/, null], [';', '.']).split('\n')
        },
        {
            title: `Именительный падеж всегда употребляется без предлога и называется прямым падежом в отличие от остальных, которые носят название косвенных. В именительном падеже существительное выступает в роли подлежащего в предложении или именной части сказуемого.`,
            list: `${style('Солнце', 'u')} ярко светило в окно;
Эта ${style('книга ', 'u')} — лучший ${style('подарок', 'u')}.`.split('\n').map(line => {return style(line, 'i')})
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
        />
    {/each}
</Container>
