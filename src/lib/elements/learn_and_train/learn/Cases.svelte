<script>
    import { goto } from '$app/navigation';
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
    const titleCases = 'Что такое падежи в русском языке';
    const aboutCases = {
        title: 'Падежи',
        description: `${style('Падеж', 'b')} - это грамматическая категория имени, выражающая его отношение к другим словам в предложении, а также форма изменения слова, необходимая для связей предложения и построения речи. Падеж отвечает на конкретные вопросы и указывает как существительное, прилагательное, местоимение или числительное относится к действию (глаголу) или другому слову.`
    };

    const aboutCasesList = {
        title: `В русском языке ${style('шесть', 'b')} падежей:`,
        list: `Именительный падеж (Кто? Что?);
Родительный падеж (Кого? Чего?);
Дательный падеж (Кому? Чему?);
Винительный падеж (Кого? Что?);
Творительный падеж (Кем? Чем?);
Предложный падеж (О ком? О чем?).`.split('\n')
    };

    const aboutWTFCases = {
        title: 'Зачем нужны падежи?',
        description: `Падежи позволяют гибко менять порядок слов в предложении, не теряя смысла. Благодаря падежным окончаниям мы всегда поймём, кто совершает действие и над кем оно совершается.`
    };


    const titleDeclension = 'Что такое склонение в русском языке';
    const aboutDeclension = {
        title: 'Склонение',
        description: `${style('Склонение', 'b')} - это процесс словоизменения именных частей речи, то есть существительных, числительных, прилагательных и местоимений. Также склонением называют группу слов, окончания которых изменяются одинаково.`
    };
    const aboutAddDeclension = {
        title: 'Типы склонения существительных',
        description: `${style('Склонение имен существительных', 'b')} - это изменение существительных по числам и падежам с помощью окончаний. То есть это сам процесс, когда слово "приспосабливает" своё окончание, чтобы встать в нужный падеж.`
    };

    const aboutDeclensionList = {
        title: `У существительных есть ${style('три', 'b')} типа склонения:`,
        list: `${style('Первое склонение', 'i')} - имена существительные мужского и женского рода с окончанием -а/-я (дедушка, дорога, земля);
${style('Второе склонение', 'i')} - имена существительные мужского рода с нулевым окончанием, а также среднего рода с окончанием -о/-е (стол, конь, окно, море);
${style('Третье склонение', 'i')} - имена существительные женского рода с нулевым окончанием (ночь, дверь, тень).`.split('\n')
    };

    const aboutDeclensionExampleList = {
        title: `Пример склонения (изменения по падежам) слова "окно" (второе склонение):`,
        list: `И.п. (что?) - окн${style('о', 'b')};
Р.п. (чего?) - окн${style('а', 'b')};
Д.п. (чему?) - окн${style('у', 'b')};
В.п. (что?) - окн${style('о', 'b')};
Т.п. (чем?) - окн${style('ом', 'b')};
П.п. (о чем?) - об окн${style('у', 'b')}.`.split('\n')
    };

    const aboutWTFDeclension = {
        title: 'Как связаны падеж и склонение?',
        description: `${style('Падеж', 'b')} - это грамматическое значение (роль слова).
${style('Склонение', 'b')} - это грамматическое средство (способ выражения этого значения через изменение окончания).
Сначала мы определяем, какую роль играет слово в предложении (выбираем падеж), а затем по правилам склонения ставим это слово в нужную форму.`.split('\n')
    };


    const titlePagesCases = 'Выбери падеж, который будем учить!';
    const cases = [
        [
            'Именительный',
            'Родительный',
            'Дательный'
        ],
        [
            'Винительный',
            'Творительный',
            'Предложный'
        ]
    ];
    const casename = 'падеж';    
</script>

<div class="center">
    <Container class="cards">
        <Title title={titleCases}/>
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock
            title={aboutCases.title} 
            colorTitle="var(--color-texts-main-dark)"
            description={aboutCases.description}
            classListDescription="left"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="2rem"/>
        
        <List
            title={aboutCasesList.title} 
            items={aboutCasesList.list}
            classListTitle="left"
            colorTitle="var(--color-texts-main-dark)"
            type={['square']}
            color="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="2rem"/>

        <TextBlock
            title={aboutWTFCases.title} 
            colorTitle="var(--color-texts-main-dark)"
            description={aboutWTFCases.description}
            classListDescription="left"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer <Spacer axis="vertical" line={true} size="3rem" thickness="3px"/>

        <Title title={titleDeclension}/>
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock
            title={aboutDeclension.title} 
            colorTitle="var(--color-texts-main-dark)"
            description={aboutDeclension.description}
            classListDescription="left"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="0.5rem"/>

        <TextBlock
            description={aboutAddDeclension.description}
            classListDescription="left"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock
            title={aboutAddDeclension.title} 
            colorTitle="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="1rem"/>
        
        <List
            title={aboutDeclensionList.title} 
            items={aboutDeclensionList.list}
            classListTitle="left"
            colorTitle="var(--color-texts-main-dark)"
            type={['square']}
            color="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="2rem"/>

        <List
            title={aboutDeclensionExampleList.title} 
            items={aboutDeclensionExampleList.list}
            classListTitle="left"
            colorTitle="var(--color-texts-main-dark)"
            type={['square']}
            color="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock
            title={aboutWTFDeclension.title} 
            colorTitle="var(--color-texts-main-dark)"
            description={aboutWTFDeclension.description}
            classListDescription="left"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="7rem"/>

        <Title title={titlePagesCases}/>
        <Spacer axis="vertical" size="2rem"/>
        <Container>
        {#each cases as case_element, case_element_index}
            {#if case_element_index > 0}
                <Spacer axis="vertical" size="1rem"/>
            {/if}
            <Container orientation="horizontal">
                {#each case_element as element, element_index}
                    {#if element_index > 0}
                        <Spacer axis="horizontal" size="1rem"/>
                    {/if}
                    <Container>
                        <Image
                            page='learn_and_train/learn/cases'
                            src={`case_${case_element_index * case_element.length + element_index + 1}.png`}
                            size='large'
                        />
                        <Spacer axis="vertical" size="1rem"/>
                        <Button 
                            title={`${element} ${casename}`}
                            href={base + '/learn_and_train/train/tests'}
                            url_parameter={`test_num=${case_element_index * case_element.length + element_index+1}`}
                        />
                        {#if element_index > 0}
                            <Spacer axis="vertical" size="1rem"/>
                        {/if}
                    </Container>
                {/each}
            </Container>
        {/each}
    </Container>
    </Container>
</div>