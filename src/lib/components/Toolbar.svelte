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
                        {
                            title: 'Тренажер',
                            href: '/learn_and_train/train/prewords',
                            icon: ''
                        }
                    ]
                },
                { 
                    title: 'Падежи',
                    href: '/learn_and_train/learn/cases', 
                    icon: '',
                    dropdown: [
                        { title: 'Именительный падеж', href: '/learn_and_train/train/tests?test_num=1', icon: '' },
                        { title: 'Родительный падеж', href: '/learn_and_train/train/tests?test_num=2', icon: '' },
                        { title: 'Дательный падеж', href: '/learn_and_train/train/tests?test_num=3', icon: '' },
                        { title: 'Винительный падеж', href: '/learn_and_train/train/tests?test_num=4', icon: '' },
                        { title: 'Творительный падеж', href: '/learn_and_train/train/tests?test_num=5', icon: '' },
                        { title: 'Предложный падеж', href: '/learn_and_train/train/tests?test_num=6', icon: '' },
                        { title: 'Тренажер', href: '/learn_and_train/train/cases', icon: '' }
                    ]
                }
            ]
        },
        { 
            title: 'Материалы',
            href: '/materials',
            icon: '',
            dropdown: [
                { title: 'Вспомогательные карточки', href: '/materials/cards', icon: '' },
                { title: 'Интерактивные презентации', href: '/materials/docs', icon: '' },
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
    let searchResults = [];
    let showSearchResults = false;
    
    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            showSearchResults = false;
        }
    }
    
    function toggleSearch() {
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            setTimeout(() => {
                document.getElementById('search-input-desktop')?.focus();
            }, 100);
        } else {
            showSearchResults = false;
            searchQuery = '';
        }
    }
    
    // Рекурсивная функция для поиска по items
    function searchInItems(items, query) {
        if (!query.trim()) return [];
        
        const results = [];
        const searchTerm = query.toLowerCase().trim();
        
        function traverse(itemsArray, path = []) {
            for (const item of itemsArray) {
                // Проверяем текущий элемент
                const titleMatch = item.title && item.title.toLowerCase().includes(searchTerm);
                const hrefMatch = item.href && item.href.toLowerCase().includes(searchTerm);
                
                if (titleMatch || hrefMatch) {
                    results.push({
                        ...item,
                        matchPath: [...path, item.title],
                        matchReason: titleMatch ? 'title' : 'href'
                    });
                }
                
                // Рекурсивно проверяем вложенные элементы
                if (item.dropdown && item.dropdown.length > 0) {
                    traverse(item.dropdown, [...path, item.title]);
                }
            }
        }
        
        traverse(items);
        return results;
    }
    
    // ИСПРАВЛЕНИЕ: получаем значение из события
    function updateSearchQuery(event) {
        // event.detail содержит значение, которое мы отправили из SearchForm
        searchQuery = event.detail;
        
        if (searchQuery.trim().length >= 2) {
            searchResults = searchInItems(items, searchQuery);
            showSearchResults = true;
        } else {
            searchResults = [];
            showSearchResults = false;
        }
    }
    
    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Если есть результаты поиска, показываем их
            if (searchResults.length > 0) {
                showSearchResults = true;
            } else {
                // Если результатов нет, переходим на страницу поиска
                window.location.href = `${base}/search?q=${encodeURIComponent(searchQuery)}`;
                closeMenu();
                isSearchOpen = false;
            }
        }
    }
    
    function handleResultClick(item) {
        window.location.href = `${base}${item.href}`;
        closeMenu();
        isSearchOpen = false;
        searchQuery = '';
        searchResults = [];
        showSearchResults = false;
    }
    
    function closeMenu() {
        isMenuOpen = false;
    }
    
    function closeSearch() {
        showSearchResults = false;
    }
</script>

<!-- Остальная часть шаблона остается без изменений -->
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
                <div class="search-wrapper" class:has-results={showSearchResults && searchResults.length > 0}>
                    <SearchForm 
                        query={searchQuery}
                        on:query={updateSearchQuery}
                        onSubmit={handleSearch}
                        {textColor}
                        variant="desktop"
                        inputId="search-input-desktop"
                    />
                    
                    <!-- Результаты поиска -->
                    {#if showSearchResults && searchResults.length > 0}
                        <div class="search-results">
                            {#each searchResults as result (result.href + result.title)}
                                <button 
                                    class="search-result-item"
                                    on:click={() => handleResultClick(result)}
                                    style="color: {textColor};"
                                >
                                    <span class="result-title">{result.title}</span>
                                    <span class="result-path">
                                        {result.matchPath.join(' → ')}
                                    </span>
                                    <span class="result-href">{result.href}</span>
                                </button>
                            {/each}
                        </div>
                    {:else if showSearchResults && searchQuery.length >= 2}
                        <div class="search-results empty">
                            <div class="no-results">Ничего не найдено</div>
                        </div>
                    {/if}
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

<!-- Стили остаются без изменений -->
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
        position: relative;
        display: flex;
        align-items: center;
    }
    
    .search-wrapper.has-results {
        z-index: 1001;
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

    /* Результаты поиска */
    .search-results {
        position: absolute;
        top: 100%;
        right: 0;
        min-width: 300px;
        max-width: 400px;
        max-height: 400px;
        overflow-y: auto;
        background-color: var(--toolbar-bg);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        margin-top: 0.5rem;
        z-index: 1002;
    }
    
    .search-results.empty {
        padding: 1rem;
        text-align: center;
        color: var(--toolbar-color);
    }
    
    .no-results {
        opacity: 0.7;
        font-style: italic;
    }

    .search-result-item {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        text-align: left;
        background: none;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .search-result-item:last-child {
        border-bottom: none;
    }
    
    .search-result-item:hover {
        background-color: rgba(255,255,255,0.1);
    }
    
    .result-title {
        display: block;
        font-weight: bold;
        margin-bottom: 0.25rem;
    }
    
    .result-path {
        display: block;
        font-size: 0.8rem;
        opacity: 0.7;
        margin-bottom: 0.25rem;
    }
    
    .result-href {
        display: block;
        font-size: 0.75rem;
        opacity: 0.5;
        font-family: monospace;
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
        
        .search-results {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            width: auto;
            max-width: none;
            max-height: calc(100vh - 120px);
            border-radius: 0;
            margin-top: 0;
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