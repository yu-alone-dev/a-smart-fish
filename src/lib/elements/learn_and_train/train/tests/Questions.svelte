<script>
    import { page } from '$app/state';
    import Container from '$lib/components/Container.svelte';
    import Image from '$lib/components/Image.svelte';
    import TextBlock from '$lib/components/TextBlock.svelte';
    import { style } from '$lib/utils/texts'

    $: test_num = (page.url.searchParams.get('test_num') !== null) 
        ? parseInt(page.url.searchParams.get('test_num')) 
        : (page.state?.test_num ?? 0);

    const texts = [
`Привет! Я - начальница всех слов! Со мной ты узнаешь, ${style('КТО', 'b')} это и ${style('ЧТО', 'b')} это. Я всегда первая, как буква "А" в алфавите! Готов называть предметы по имени?`,
`Привет, друг! Я рыбка-сыщик. Обожаю задавать вопросы: "${style('ЧЕГО', 'b')} здесь не хватает?" и "${style('КОГО', 'b')} мы ищем?". Нет ручки? Нет тетрадки? Со мной ты научишься находить всё пропавшее! Давай поищем вместе?`,
`Здравствуй! Я - самая дружелюбная рыбка! Я всем рада и всем помогаю. Хочешь узнать, ${style('ЧТО', 'b')} подарить рисунок и ${style('КОМУ', 'b')} обрадуется мама? Давай учиться говорить о дружбе и помощи!`,
`Привет! Я вижу цель и всегда иду к ней! Со мной ты поймёшь, ${style('КОГО', 'b')} можно увидеть и ${style('ЧТО', 'b')} нужно сделать. Готов действовать? Тогда вперёд!`,
`Привет-привет! Я рыбка-изобретатель! Со мной ты узнаешь, ${style('ЧЕМ', 'b')} можно рисовать и ${style('КЕМ', 'b')} мечтаешь стать. Я умею творить чудеса! Давай создадим что-нибудь вместе?`,
`Привет! Я рыбка, которая любит рассказывать истории. Давай расскажу ${style('О ЧЁМ', 'b')} я мечтаю и ${style('О КОМ', 'b')} скучаю?`
    ]
</script>


<Container orientation="horizontal">
    <Container>
        <Image
            page='learn_and_train/train/tests'
            src={`test_${test_num}.png`}
            size='medium'
        />
    </Container>
    <Container>
        <div class="text">
            <TextBlock 
                description={texts[test_num - 1]}
                classListDescription='left'
            />
        </div>
    </Container>
</Container>

<style>
.text {
    font-size: 'xxx-large';
}
</style>
