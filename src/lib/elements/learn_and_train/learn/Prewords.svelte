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
    const titleTexts = 'Что такое предлоги в русском языке';
    const aboutPrewords = `${style('Предлоги', 'b')} - это служебная часть речи, которая служит для связи существительного, местоимения, числительного и выражает отношения между словами в словосочетании, предложении. Предлоги могут обозначать отношения между действием и объектом (смотреть на небо), объектом и объектом (лодка с парусом), признаком и объектом (готовый на самопожертвование).`.replace(/\((.*?)\)/g, function(match) {
        return style(match, 'i')
    });
    
    const titleAboutPrewords = 'Виды предлогов';
    const aboutAllPrewords = `Предлоги ставят перед именами существительными, числительными и местоимениями в разных падежах. При этом со словами в именительном падеже эту часть речи не употребляют. Предлоги разделяют на 3 разряда: по происхождению, по составу и по значению:`;
    
    const aboutAllPrewordsList = [
style(`По значению:`, 'b'),

style(
`пространственные (указывают на место) - к, в, на, под, из-за, перед, около, вокруг;
временные (указывают на время) - к, до, с, через, около;
причинные (указывают на причину) - по, от, из-за, ввиду, вследствие;
целевые (указывают на цель) - по, для, ради;
образа действия (указывают на образ действия) - в, с, по, от, без;
уступительные (указывают на противоречие одного события другому) - вопреки, несмотря на;
объектные (указывают на предмет, на который направлено действие) - о, с, на, по, об, про, насчёт;
определительные (указывают на признак предмета) - в, с, из, по, на, без.`,
'i', [], [/-/, null], [';', '.']).split('\n'),

style(`По составу:`, 'b'),

style(
`простые предлоги, состоящие из одного слова - из, с, в, на, под;
сложные предлоги, которые состоят из двух слов, написанных через дефис - из-за, из-под;
составные предлоги, которые состоят из двух и более слов, написанных раздельно - в течение, в продолжение, несмотря на.`,
'i', [], [/-/, null], [';', '.']).split('\n'),

style(`По происхождению:`, 'b'),

style(
`непроизводные (первообразные), которые возникли ещё в древности и в современном языке ни с какими частями речи не соотносятся - за, из, с, к и другие;
производные, которые образованы в более поздний период от самостоятельных частей. По этому признаку их разделяют на:`,
'i', [], [/-/, null], [';', '.']).split('\n'),
[
style(
`отымённые, которые произошли от существительных - в течение, по мере, вследствие;
отглагольные, которые произошли от деепричастий - благодаря, смотря;
наречные, которые произошли от наречий - вокруг, около, мимо.`,
'i', [], [/-/, null], [';', '.']).split('\n').map( line => {return `- ${line}`}),
]];

    const titleImage = 'Иллюстрация пространственных предлогов';
</script>

<div class="center">
    <Container class="cards">
        <Title title={titleTexts}/>
        <Spacer axis="vertical" size="5rem"/>

        <TextBlock 
            description={aboutPrewords}
            classListDescription="justify"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="3rem"/>
        
        <TextBlock 
            title={titleAboutPrewords}
            description={aboutAllPrewords}
            classListTitle="center"
            classListDescription="justify"
            colorTitle="var(--color-texts-main-dark)"
            colorDescription="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="1rem"/>

        <List 
            items={aboutAllPrewordsList}
            classListTitle="center"
            colorTitle="var(--color-texts-main-dark)"
            type={['decimal', 'square', 'none']}
            color="var(--color-texts-main-dark)"
        />
        <Spacer axis="vertical" size="3rem"/>

        <Title title={titleImage}/>
        <Spacer axis="vertical" size="5rem"/>
        <Image page='learn_and_train/learn/prewords' size="auto" src={'prewords_example.png'}/>
    </Container>
</div>