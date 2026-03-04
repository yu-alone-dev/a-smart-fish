<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Button from '$lib/components/Button.svelte';
    import List from '$lib/components/List.svelte';
    import {style} from '$lib/utils/texts'

    /* Текстовые переменные */
    const title = 'Тренажёр "Вставь предлоги!"';
    const aboutTrain = 'Тебя ждёт увлекательная игра, которая поможет тебе научиться правильно использовать предлоги в русском языке.';

    const guideTitle = style('Как играть:', 'b');
    const guideList = 
`Прочитай предложение с пропущенным предлогом.
Выбери подходящий предлог из предложенных вариантов.
Нажми "Проверить", чтобы узнать, правильно ли ты ответил.
Если ошибёшься - не расстраивайся! Ты можешь попробовать снова.
Когда будешь готов к следующему заданию - нажми "Дальше".`.split('\n');

    const titleStartTrain = 'Готов начать?';
    const descriptionStartTrain = 'Отлично! Нажимай на предлоги, заполняй пропуски и проверяй свои знания. У тебя всё получится!';
</script>

<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock 
            description={aboutTrain}
            classListDescription="justify"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="3rem"/>

        <List
            title={guideTitle}
            classListTitle="left"
            colorTitle="var(--color-texts-main-dark)" 
            items={guideList}
            type={['decimal', 'square', 'disc']}
            color="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="3rem"/>
        
        <TextBlock 
            title={titleStartTrain}
            description={descriptionStartTrain}
            classListTitle="left"
            classListDescription="justify"
            colorTitle="var(--color-texts-main-dark)"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="3rem"/>

        <iframe 
            src="{base}/pages/games/prewords.html"
            title=""
            width="100%"
            style="height: auto; min-height: 800px;"
            frameborder="0"
            scrolling="no"
        ></iframe>
        
        <Spacer axis="vertical" size="3rem"/>
    </Container>
</div>