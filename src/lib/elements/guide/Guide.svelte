<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Title from '$lib/components/Title.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Button from '$lib/components/Button.svelte';
    import {style} from '$lib/utils/texts'

    /* Текстовые переменные */
    const title = "Как пользоваться Тренажёром";
    const cardsFish = [
        { text: { title: 'Выбери слово',
            description: 'Чтобы приступить к работе, необходимо выбрать слово.'},
            img: 'select_word.png'},
        { text: { title: 'Напиши окончание',
            description: 'После выбора слова, нужно определить окончание и написать его в соответствующее окошко.'},
            img: 'input_endword.png'},
        { text: { title: 'Проверь себя',
            description: 'Определив окончание, необходимо нажать на кнопку с галочкой. Рыбка "скажет", правильно ли оно было указано.'},
            img: 'check_correct.png'},
        { text: { title: 'Проверь себя',
            description: 'Если окончание было определено неверно, то рыбка сообщит, что есть ошибка.'},
            img: 'check_incorrect.png'},
        { text: { title: 'Используй подсказку',
            description: 'Кнопка с лампочкой обозначает подсказку. При нажатии на нее, рыбка подскажет на какие вопросы отвечает выбранный падеж.'},
            img: 'hint.png'},
        { text: { title: 'Поменяй число и падеж',
            description: 'Чтобы выбрать другой падеж или число, достаточно просто кликнуть на слово или перетащить ползунок.'},
            img: 'select_case_and_nums.png'},
        { text: { title: 'Вернись обратно',
            description: 'Чтобы вернуться назад к словам, нажмите на кнопку со стрелочкой.'},
            img: 'back.png'}
    ];

    const cardsTitleSettings = "Управление списком слов"
    const cardsTextSettings = `Если необходимо заменить или добавить новые слова, то нужно кликнуть на данную кнопку, откроется следующее меню.
${style('Кнопка "Загрузить файл"', 'b')} - загрузка файла с новыми словами в формате csv. Открывать в программе Excel. Формат не менять.
${style('Кнопа "Скачать файл"', 'b')} - скачивание текущих загруженных слов, где можно их убирать и добавлять новые.
${style('Кнопка "Сбросить"', 'b')} - возвращает Тренажёр к первоначальному списку слов.`.split('\n')

const cardsFile = [
        { text: { title: 'Файл со словами',
            description: 'Скаченный файл со словами в формате csv выглядит следующим образом.'},
            img: 'file_svg.png'},
        { text: { title: 'Редактирование слов',
            description: `Файл открывается в программе Excel.
В круглых скобках указаны окончания, соответствующие определенному падежу и числу. 
Чтобы ${style('убрать слово', 'b')}, достаточно удалить всю строку с ним. Чтобы ${style('добавить слово', 'b')}, необходимо его прописать во всех падежах в единственном и множественном числе, указав окончания в круглых скобках.
Если слово подразумевает два окончания, то мы прописываем в одно окно два слова следующим образом: ${style('дочерь(ми), дочер(ями).', 'i')}`.split('\n')},
            img: 'edit_file_svg.png'},
        { text: { title: 'Сохранение слов',
            description: 'После изменения списка слов, необходимо сохранить файл.'},
            img: 'save_svg.png'},
        { text: { title: 'Загрузка новых слов',
            description: 'Затем, сохраненный файл загрузить в Тренажёр. Новые слова будут добавлены автоматически.'},
            img: 'load_download.png'}
    ];
</script>


<div class="center">
    <Container class="cards">
        <Title title={title}/>
        <Spacer axis="vertical" size="5rem"/>

        {#each cardsFish as card, index}
            {#if index > 0}
                <Spacer axis="vertical" line={true} size="2rem" thickness="3px"/>
            {/if}
            <Container orientation="horizontal">
                <Container>
                    <TextBlock 
                        title={card.text.title}
                        fontSizeTitle='var(--font-size-title)'
                        description={card.text.description}
                        classListTitle="left"
                        classListDescription="justify"
                        colorDescription="var(--color-texts-main-dark)"
                    />
                </Container>
                <Spacer axis="horizontal" size="2rem"/>
                <Container>
                    <Image
                        page='guide'
                        src={card.img}
                        size={card.img == 'edit_file_svg.png' ? "medium" : "full"}
                        align='right'/>
                </Container>
            </Container>
        {/each}
        <Spacer axis="vertical" line={true} size="2rem" thickness="5px"/>
        
        <Container orientation="horizontal">
            <Container>
                <TextBlock 
                    title={cardsTitleSettings}
                    fontSizeTitle='var(--font-size-title)'
                    description={cardsTextSettings}
                    classListTitle="left"
                    classListDescription="justify"
                    colorDescription="var(--color-texts-main-dark)"
                />
            </Container>
            <Spacer axis="horizontal" size="2rem"/>
            <Container>
                <Image page='guide' src="load_download.png" size="large" align='right'/>
            </Container>
        </Container>
        <Spacer axis="vertical" line={true} size="2rem" thickness="5px"/>

        {#each cardsFile as card, index}
            {#if index > 0}
                <Spacer axis="vertical" line={true} size="2rem" thickness="3px"/>
            {/if}
            <Container orientation={card.img != 'edit_file_svg.png' ? "horizontal" : "vertical"}>
                <Container>
                    <TextBlock 
                        title={card.text.title}
                        fontSizeTitle='var(--font-size-title)'
                        description={card.text.description}
                        classListTitle="left"
                        classListDescription="justify"
                        colorDescription="var(--color-texts-main-dark)"
                    />
                {#if card.img == 'edit_file_svg.png'}
                    <Spacer axis="vertical" size="2rem" thickness="3px"/>
                {/if}
                </Container>
                <Spacer axis="horizontal" size="2rem"/>
                <Container>
                    <Image
                        page='guide'
                        src={card.img}
                        size={card.img == 'file_svg.png' ? "small" : card.img == 'edit_file_svg.png' ? 'full' : 'large'}
                        align='right'/>
                </Container>
            </Container>
        {/each}
    </Container>
</div>
