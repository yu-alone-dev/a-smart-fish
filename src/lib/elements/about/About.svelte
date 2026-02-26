<script>
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Image from '$lib/components/Image.svelte';
    import List from '$lib/components/List.svelte';
    import {style} from '$lib/utils/texts'

    /* Текстовые переменные */

    const aboutTexts = [
`Этот сайт - цифровой помощник сложной, но увлекательной работы по формированию грамматического строя речи у младших школьников, в том числе с нарушениями речи. Он создан для логопедов, педагогов и родителей, которые ищут современный и наглядный подход к коррекции аграмматизмов.`,

`Падежи с их изменяющимися вопросами, предлогами и окончаниями кажутся детям хаотичным набором правил. Чтобы в них не запутаться, ребята часто зубрят материал, не вникая в логику. Нашей целью является собрать эту головоломку, показав простую и красивую схему.`,

`В качестве идеи был взят и адаптирован под падежи метод "Фишбоун", созданный японским профессором Каору Исикава для анализа проблем и их причин. Каждый падеж тоже является для ребенка своего рода "задачей"	(как правильно изменить слово?), у которой есть свои "причины" (окончания и предлоги) и свое "решение" (логика употребления).`,
];

const title = "Как представлена схема?";

const guideTexts = [
`1. Голова (проблема/вопрос).`,
`2. Верхние косточки (основные понятия темы и причины).`,
`3. Нижние косточки (факты, относящиеся к основным понятиям темы).`,
`4. Хвост (вывод/суть).`
].map(e => style(e, 'b'));

const questions = [
    `Что это?`,
    `Зачем?`
].map(e => style(e, 'i'));

const guideLists = [
`ключевые вопросы падежа.
это отправная точка, "проблема", которую нужно решить.`,

`возможные предлоги и склонения.
это вспомогательные элементы, которые уточняют значение и без которых часто нельзя обойтись.`,

`окончания.
это основные грамматические инструменты для решения "проблемы".`,

`краткая суть и характеристика падежа.
это не готовое предложение, а смысловой итог, характеризующий значение падежа.`,
].map(element => element.split('\n').map((e, i) => `${questions[i % 2]} - ${e}`));

const have = style('На сайте есть:', 'b')

const haveList = `тренажер, созданный на основе вспомогательных карточек со схемой рыбок;
тесты, которые встроены в сайт;
интерактивные презентации;
готовые материалы для печати: вспомогательные карточки схем рыбок, тесты, задания;
инструкция по использованию тренажера.`.split('\n')
</script>


<div class="center">
    <Container>
        {#each aboutTexts as text}
            <TextBlock 
                description={text}
                classListDescription="left"
                colorDescription="var(--color-texts-main-dark)"
            />
            <Spacer axis="vertical" size="1rem"/>
        {/each}
        <Title title={title}/>
        <Spacer axis="vertical" size="2rem"/>
        {#each guideTexts as text, index}
            <TextBlock 
                description={text}
                classListDescription="left"
                colorDescription="var(--color-texts-main-dark)"
            />
            <List 
                items={guideLists[index]}
                type="square"
                color="var(--color-texts-main-dark)"
            />
            <Spacer axis="vertical" size="1rem"/>
        {/each}
        <Image page='about' src='about.png'/>
        <TextBlock 
                description={have}
                classListDescription="left"
                colorDescription="var(--color-texts-main-dark)"
            />
        <List 
            items={haveList}
            type="square"
            color="var(--color-texts-main-dark)"
        />
    </Container>
</div>

