<script>
    import Toolbar from '../lib/components/Toolbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import HowItWorks from '$lib/elements/main/HowItWorks.svelte';
    import Footer from '$lib/elements/Footer.svelte';
    import Spacer from '$lib/components/Spacer.svelte';

    const menuItems = [
        { 
            title: 'Главная', 
            href: '/', 
            icon: '' 
        },
        { 
            title: 'Учим и Играем', 
            icon: '',
            dropdown: [
                { 
                    title: 'Предлоги', 
                    icon: '',
                    dropdown: [
                        { title: 'Тренажер', href: '/learn/prepositions/trainer', icon: '' }
                    ]
                },
                { 
                    title: 'Падежи', 
                    icon: '',
                    dropdown: [
                        { title: 'Именительный падеж', href: '/learn/cases/nominative', icon: '' },
                        { title: 'Родительный падеж', href: '/learn/cases/genitive', icon: '' },
                        { title: 'Дательный падеж', href: '/learn/cases/dative', icon: '' },
                        { title: 'Винительный падеж', href: '/learn/cases/accusative', icon: '' },
                        { title: 'Творительный падеж', href: '/learn/cases/instrumental', icon: '' },
                        { title: 'Предложный падеж', href: '/learn/cases/prepositional', icon: '' },
                        { title: 'Тренажер', href: '/learn/cases/trainer', icon: '' }
                    ]
                }
            ]
        },
        { 
            title: 'Материалы', 
            icon: '',
            dropdown: [
                { title: 'Вспомогательные карточки', href: '/materials/cards', icon: '' },
                { title: 'Интерактивные презентации', href: '/materials/presentations', icon: '' },
                { title: 'Тесты и задания', href: '/materials/tests', icon: '' }
            ]
        },
        { 
            title: 'Инструкция', 
            href: '/guide', 
            icon: '' 
        },
        { 
            title: 'О сайте', 
            href: '/about', 
            icon: '' 
        }
    ];
</script>

<Toolbar 
    items={menuItems}
    logoSrc="/favicon.png"
    backgroundColor="var(--color-background-button)"
    textColor="var(--color-texts-main-light)"
    transparentUntilScroll={true}
/>

<!-- Hero на весь экран -->
<Hero 
    imageSrc="/imgs/main/hero-bg.png"
    title="Умные рыбки: Учим падежи!"
/>

<!-- Остальной контент -->
<main>
    <Spacer axis="vertical" size="3rem"/>
    <HowItWorks/>
    <Spacer axis="vertical" size="3rem"/>
    <Footer/>
</main>