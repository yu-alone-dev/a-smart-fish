<script>
    import Container from '$lib/components/Container.svelte';
    import { base } from '$app/paths';

    // Данные из вашего меню
    const menuItems = [
        { 
            title: 'Главная', 
            href: '/'
        },
        { 
            title: 'Учим и Играем',
            href: '/learn_and_train',
            dropdown: [
                { 
                    title: 'Предлоги', 
                    href: '/learn_and_train/learn/prewords',
                    dropdown: [
                        { title: 'Тренажёр', href: '/learn_and_train/train/prewords' }
                    ]
                },
                { 
                    title: 'Падежи',
                    href: '/learn_and_train/learn/cases',
                    dropdown: [
                        { title: 'Именительный падеж', href: '/learn_and_train/train/tests?test_num=1' },
                        { title: 'Родительный падеж', href: '/learn_and_train/train/tests?test_num=2' },
                        { title: 'Дательный падеж', href: '/learn_and_train/train/tests?test_num=3' },
                        { title: 'Винительный падеж', href: '/learn_and_train/train/tests?test_num=4' },
                        { title: 'Творительный падеж', href: '/learn_and_train/train/tests?test_num=5' },
                        { title: 'Предложный падеж', href: '/learn_and_train/train/tests?test_num=6' },
                        { title: 'Тренажёр', href: '/learn_and_train/train/cases' }
                    ]
                }
            ]
        },
        { 
            title: 'Материалы',
            href: '/materials',
            dropdown: [
                { title: 'Вспомогательные карточки', href: '/materials/cards' },
                { title: 'Интерактивные презентации', href: '/materials/docs' },
                { title: 'Тесты и задания', href: '/materials/tests' }
            ]
        },
        { 
            title: 'Инструкция', 
            href: '/guide'
        },
        { 
            title: 'О сайте', 
            href: '/about'
        }
    ];

    // Функция для получения полного href с base
    function getFullHref(href) {
        return base + href;
    }
</script>

<footer>
    <div class="footer-container">
        <div class="footer-grid">
            <!-- Первая колонка: контакты -->
            <div class="footer-col">
                <Container>
                    <div class="footer-section">
                        <p class="contact-text">
                            Сообщить об ошибке<br/>
                            <span class="email">🖂 E-mail: smart_fish02@mail.ru</span>
                        </p>
                        <p class="copyright">
                            Создано для ознакомительных<br/>
                            и образовательных целях
                        </p>
                    </div>
                </Container>
            </div>

            <!-- Вторая колонка: Учим и Играем -->
            <div class="footer-col">
                <Container>
                    <div class="footer-section">
                        <a href={getFullHref(menuItems[1].href)} class="footer-link main-link">
                            {menuItems[1].title}
                        </a>
                        
                        <ul class="footer-list">
                            <!-- Предлоги -->
                            <li class="list-item section-item">
                                <a href={getFullHref(menuItems[1].dropdown[0].href)} class="footer-link">
                                    ✦ {menuItems[1].dropdown[0].title}
                                </a>
                                <ul class="footer-sublist">
                                    {#each menuItems[1].dropdown[0].dropdown as subitem}
                                        <li>
                                            <a href={getFullHref(subitem.href)} class="footer-link">
                                                - {subitem.title}
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                            </li>
                            
                            <!-- Падежи -->
                            <li class="list-item section-item">
                                <a href={getFullHref(menuItems[1].dropdown[1].href)} class="footer-link">
                                    ✦ {menuItems[1].dropdown[1].title}
                                </a>
                                <ul class="footer-sublist">
                                    {#each menuItems[1].dropdown[1].dropdown.slice(0, 6) as item}
                                        <li>
                                            <a href={getFullHref(item.href)} class="footer-link">
                                                - {item.title}
                                            </a>
                                        </li>
                                    {/each}
                                    <li>
                                        <a href={getFullHref(menuItems[1].dropdown[1].dropdown[6].href)} class="footer-link">
                                            - Тренажёр
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            <!-- Третья колонка: Материалы -->
            <div class="footer-col">
                <Container>
                    <div class="footer-section">
                        <a href={getFullHref(menuItems[2].href)} class="footer-link main-link">
                            {menuItems[2].title}
                        </a>
                        
                        <ul class="footer-list">
                            {#each menuItems[2].dropdown as item}
                                <li>
                                    <a href={getFullHref(item.href)} class="footer-link">
                                        - {item.title}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </Container>
            </div>

            <!-- Четвертая колонка: Инструкция и О сайте -->
            <div class="footer-col">
                <Container>
                    <div class="footer-section">
                        <ul class="footer-list">
                            <li>
                                <a href={getFullHref(menuItems[3].href)} class="footer-link main-link">
                                    {menuItems[3].title}
                                </a>
                            </li>
                            <li class="spacer"></li>
                            <li>
                                <a href={getFullHref(menuItems[4].href)} class="footer-link main-link">
                                    {menuItems[4].title}
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        padding: 3rem 2rem;
        width: 100%;
        background: var(--color-background-button);
        color: var(--color-texts-main-light);
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem 0rem 4rem;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        justify-content: space-between;
    }

    .footer-col {
        min-width: 0; /* Предотвращает переполнение */
    }

    .footer-section {
        font-family: var(--font-family-main);
        font-size: var(--font-size-card-button);
        line-height: 1.8;
    }

    /* Контактная информация */
    .contact-text {
        margin: 0 0 1.5rem 0;
    }

    .email {
        font-weight: 500;
        color: var(--color-texts-main-light);
        word-break: break-word;
    }

    .copyright {
        margin: 0;
        line-height: 1.5;
    }

    /* Списки */
    .footer-list {
        list-style: none;
        padding: 0;
        margin: 0.5rem 0 0 0;
    }

    .footer-sublist {
        list-style: none;
        padding-left: 1.2rem;
        margin: 0.2rem 0 0.5rem 0;
    }

    .list-item {
        margin-bottom: 0.5rem;
    }

    .section-item {
        font-weight: 500;
        margin-top: 0.5rem;
    }

    .spacer {
        height: 0.5rem;
    }

    /* Ссылки */
    .footer-link {
        color: var(--color-texts-main-light);
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-block;
    }

    .footer-link:hover {
        opacity: 0.8;
        transform: translateX(2px);
    }

    .main-link {
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        position: relative;
    }

    /* Планшеты */
    @media (max-width: 992px) {
        .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
        }
    }

    /* Мобильные устройства */
    @media (max-width: 640px) {
        footer {
            padding: 2rem 1rem;
        }

        .footer-grid {
            grid-template-columns: 1fr; /* Одна колонка */
            gap: 2rem;
        }

        .footer-col {
            text-align: left; /* Выравнивание по левому краю */
        }

        .footer-section {
            font-size: 0.95rem;
            max-width: 100%;
        }

        .main-link {
            font-size: 1.1rem;
        }

        .footer-sublist {
            padding-left: 1.5rem;
        }

        .contact-text, .copyright {
            text-align: left;
        }

        .email {
            font-size: 0.95rem;
        }

        /* Добавляем разделители между секциями на мобильных */
        .footer-col:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1.5rem;
        }
    }

    /* Очень маленькие экраны */
    @media (max-width: 380px) {
        .footer-section {
            font-size: 0.9rem;
        }

        .footer-sublist {
            padding-left: 1rem;
        }
    }
</style>