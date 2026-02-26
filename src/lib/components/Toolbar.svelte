<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import DesktopMenu from './toolbar/desktop/DesktopMenu.svelte';
    import MobileMenu from './toolbar/mobile/MobileMenu.svelte';
    import Logo from './toolbar/shared/Logo.svelte';
    import SearchForm from './toolbar/shared/SearchForm.svelte';
    
    export let items = [
        { 
            title: 'Главная', 
            href: '/', 
            icon: '' 
        },
        { 
            title: 'Учим и Играем',
            href: '/learn_and_train', 
            icon: '',
            dropdown: [
                { 
                    title: 'Предлоги', 
                    href: '/learn_and_train/learn/prewords',
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
    export let logoSrc = '';
    export let backgroundColor = 'var(--color-background-button)';
    export let textColor = 'var(--color-texts-main-light)';
    export let hoverColor = 'var(--color-texts-button)';
    export let sticky = true;
    export let transparentUntilScroll = true;
    
    let isMenuOpen = false;
    let isSearchOpen = false;
    let isScrolled = false;
    let searchQuery = '';
    
    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    function toggleSearch() {
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            setTimeout(() => {
                document.getElementById('search-input-desktop')?.focus();
            }, 100);
        }
    }
    
    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `${base}/search?q=${encodeURIComponent(searchQuery)}`;
            closeMenu();
            isSearchOpen = false; // закрываем поиск после отправки
        }
    }
    
    function closeMenu() {
        isMenuOpen = false;
    }
    
    function updateSearchQuery(value) {
        searchQuery = value;
    }
</script>

<nav 
    class="toolbar" 
    class:sticky
    class:scrolled={isScrolled}
    class:transparent={transparentUntilScroll && !isScrolled}
    style="
        --toolbar-bg: {backgroundColor};
        --toolbar-color: {textColor};
        --toolbar-hover: {hoverColor};
    "
>
    <div class="toolbar-container">
        <Logo {logoSrc} {base} color={textColor} />

        <!-- Десктопное меню - видно только на больших экранах -->
        <div class="desktop-menu">
            <DesktopMenu {items} {textColor} {backgroundColor} />
        </div>

        <div class="right-section">
            <!-- Поисковая форма - видна и на десктопе, и на мобильных -->
            {#if isSearchOpen}
                <div class="search-wrapper">
                    <SearchForm 
                        query={searchQuery}
                        on:query={updateSearchQuery}
                        onSubmit={handleSearch}
                        {textColor}
                        variant="desktop"
                        inputId="search-input-desktop"
                    />
                </div>
            {/if}
            
            <button 
                class="search-toggle"
                on:click={toggleSearch}
                style="color: var(--toolbar-color);"
                aria-label="Поиск"
            >
                <img src="{base}/icons/search.svg" alt="" width="20" height="20">
            </button>
            
            <button 
                class="menu-toggle" 
                on:click={toggleMenu}
                style="color: var(--toolbar-color);"
                aria-label="Меню"
            >
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </button>
        </div>
    </div>

    <!-- Мобильное меню - появляется при клике на гамбургер -->
    {#if isMenuOpen}
        <div class="mobile-menu" style="background-color: var(--toolbar-bg);">
            <MobileMenu 
                {items}
                level={0}
                {textColor}
                {backgroundColor}
                onClose={closeMenu}
            />
        </div>
    {/if}
</nav>

<style>
    .toolbar {
        width: 100%;
        z-index: 1000;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        position: fixed;
        top: 0;
        left: 0;
    }

    .toolbar.sticky {
        position: fixed;
    }

    .toolbar.transparent {
        background-color: transparent;
        box-shadow: none;
    }

    .toolbar.scrolled {
        background-color: var(--toolbar-bg);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .toolbar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 1rem;
        margin: 0;
        box-sizing: border-box;
    }

    /* Десктопное меню - видно только на больших экранах */
    .desktop-menu {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: 1rem;
    }

    /* Правая секция */
    .right-section {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    .search-wrapper {
        display: flex;
        align-items: center;
    }

    .search-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
    }

    .search-toggle img {
        filter: brightness(0) invert(1);
        width: 20px;
        height: 20px;
        transition: filter 0.3s;
    }

    .toolbar.scrolled .search-toggle img {
        filter: none;
    }

    /* Кнопка гамбургер - скрыта на десктопе */
    .menu-toggle {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .hamburger {
        width: 24px;
        height: 2px;
        background-color: currentColor;
        transition: 0.3s;
    }

    /* Мобильное меню */
    .mobile-menu {
        display: none;
        padding: 1rem;
        background-color: var(--toolbar-bg);
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100vh - 60px);
        z-index: 999;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        overflow-y: auto;
    }

    /* Мобильные стили */
    @media (max-width: 768px) {
        .desktop-menu {
            display: none !important;
        }

        .menu-toggle {
            display: flex !important;
        }

        .mobile-menu {
            display: block;
        }

        .right-section {
            margin-left: auto;
        }
        
        /* На мобильных устройствах поиск занимает меньше места */
        .search-wrapper {
            max-width: 150px;
        }
        
        .search-wrapper .search-input {
            width: 100%;
        }
    }

    /* Десктопные стили */
    @media (min-width: 769px) {
        .desktop-menu {
            display: flex !important;
        }

        .menu-toggle {
            display: none !important;
        }

        .mobile-menu {
            display: none !important;
        }
    }
</style>