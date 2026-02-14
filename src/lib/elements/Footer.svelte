<script>
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';

    const texts = [
`Сообщить об ошибке
🖂 E-mail: smart_fish02@mail.ru



Создано для ознакомительных и образовательных целях`,

`🕮 Учим и Играем
✦ Предлоги
    -   Тренажер 
✦ Падежи  
    -   Именительный падеж 
    -   Родительный падеж 
    -   Дательный падеж 
    -   Винительный падеж 
    -   Творительный падеж 
    -   Предложный падеж 
    -   Тренажер 
`,

`🗁 Материалы
    -   Вспомогательные карточки
    -   Интерактивные презентации 
    -   Тесты и задания`,

`🗋 Инструкция

☰ О сайте`,

    ]
</script>

<footer>
    <div class="center">
        <Container orientation="horizontal">
            {#each texts as text}
                <Container>
                    <p class="text center">{@html text}</p>
                </Container>
            {/each}
        </Container>
    </div>
</footer>

<style>
    footer {
        padding: 2em;
        width: 100%;
        background: var(--color-background-button);
    }

    .center {
        text-align: left;
    }

    .text {
        font-family: var(--font-family-main);
        font-size: var(--font-size-card-button);
        color: var(--color-texts-main-light);
        font-weight: 400;
        white-space: pre-wrap;
    }
</style>