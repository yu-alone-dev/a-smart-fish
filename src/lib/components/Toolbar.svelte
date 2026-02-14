<script>
    import DropdownMenu from './DropdownMenu.svelte';
    import MobileMenu from './MobileMenu.svelte';
    import { onMount } from 'svelte';
    
    export let items = []; // массив пунктов меню с поддержкой любой вложенности
    export let logoSrc = ''; // путь к логотипу
    export let backgroundColor = 'var(--color-background-button)';
    export let textColor = 'var(--color-texts-main-light)';
    export let hoverColor = 'var(--color-texts-button)';
    export let sticky = true;
    export let transparentUntilScroll = true;
    
    let searchQuery = '';
    let isMenuOpen = false;
    let isSearchOpen = false;
    let openDropdown = null;
    let isScrolled = false;
    
    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    
    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    }
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    function toggleSearch() {
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            setTimeout(() => {
                document.getElementById('search-input')?.focus();
            }, 100);
        }
    }
    
    function toggleDropdown(index) {
        openDropdown = openDropdown === index ? null : index;
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
        <!-- Логотип слева -->
        <div class="logo">
            {#if logoSrc}
                <a href="/">
                    <img src={logoSrc} alt="Logo" class="logo-img rotating">
                </a>
            {:else}
                <a href="/" class="logo-text" style="color: var(--toolbar-color);">
                    Логотип
                </a>
            {/if}
        </div>

        <!-- Десктопное меню с поддержкой вложенности -->
        <div class="desktop-menu">
            {#each items as item, index}
                <div class="menu-item-wrapper">
                    {#if item.dropdown && item.dropdown.length}
                        <!-- Элемент с выпадающим меню -->
                        <button 
                            class="menu-trigger"
                            style="color: var(--toolbar-color);"
                            on:click={() => toggleDropdown(index)}
                            on:mouseenter={() => openDropdown = index}
                            on:mouseleave={() => openDropdown = null}
                        >
                            {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                            <span class="menu-title">{item.title}</span>
                            <span class="menu-arrow">▼</span>
                        </button>
                        
                        {#if openDropdown === index}
                            <div 
                                class="dropdown-menu"
                                on:mouseenter={() => openDropdown = index}
                                on:mouseleave={() => openDropdown = null}
                                style="background-color: var(--toolbar-bg);"
                            >
                                <DropdownMenu 
                                    items={item.dropdown} 
                                    level={1}
                                    textColor={textColor}
                                    backgroundColor={backgroundColor}
                                />
                            </div>
                        {/if}
                    {:else}
                        <!-- Обычная ссылка -->
                        <a 
                            href={item.href}
                            class="menu-link"
                            style="color: var(--toolbar-color);"
                        >
                            {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                            <span class="menu-title">{item.title}</span>
                        </a>
                    {/if}
                </div>
            {/each}
        </div>

        <!-- Поиск и кнопки справа -->
        <div class="right-section">
            {#if isSearchOpen}
                <form class="search-form" on:submit={handleSearch}>
                    <input 
                        id="search-input"
                        type="text" 
                        class="search-input"
                        placeholder="Поиск..."
                        bind:value={searchQuery}
                        style="
                            background-color: rgba(255,255,255,0.1);
                            color: var(--toolbar-color);
                            border-color: var(--toolbar-color);
                        "
                    >
                </form>
            {/if}
            <button 
                class="search-toggle"
                on:click={toggleSearch}
                style="color: var(--toolbar-color);"
            >
                <img src="/src/lib/assets/icons/search.svg" alt="Поиск" width="20" height="20">
            </button>
            
            <button 
                class="menu-toggle mobile-only" 
                on:click={toggleMenu}
                style="color: var(--toolbar-color);"
            >
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </button>
        </div>
    </div>

    <!-- Мобильное меню с поддержкой вложенности -->
    {#if isMenuOpen}
        <div class="mobile-menu" style="background-color: var(--toolbar-bg);">
            <MobileMenu 
                items={items} 
                level={0}
                textColor={textColor}
                backgroundColor={backgroundColor}
                onClose={() => isMenuOpen = false}
            />
            
            <!-- Поиск в мобильном меню -->
            <form class="search-form mobile" on:submit={handleSearch}>
                <input 
                    type="text" 
                    class="search-input"
                    placeholder="Поиск..."
                    bind:value={searchQuery}
                    style="
                        background-color: rgba(255,255,255,0.1);
                        color: var(--toolbar-color);
                        border-color: var(--toolbar-color);
                    "
                >
                <button 
                    type="submit" 
                    class="search-button"
                    style="color: var(--toolbar-color);"
                >
                    <img src="/src/lib/assets/icons/search.svg" alt="Поиск" width="20" height="20">
                </button>
            </form>
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

    /* Логотип */
    .logo {
        flex-shrink: 0;
    }

    .logo-img {
        height: 40px;
        width: auto;
    }

    .rotating {
        animation: spin-counterclockwise 10s linear infinite;
    }

    @keyframes spin-counterclockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
    }

    .logo-text {
        font-family: var(--font-family-main);
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1px;
    }

    /* Десктопное меню */
    .desktop-menu {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-left: auto; /* Сдвигает меню вправо */
        margin-right: 1rem;
    }
    
    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0; /* Выпадающее меню выравнивается по правому краю родителя */
        min-width: 220px;
        background: inherit;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        padding: 0.5rem 0;
        z-index: 1001;
    }
    
    /* Для последних элементов, чтобы меню не уходило за экран */
    .menu-item-wrapper:last-child .dropdown-menu {
        right: 0;
        left: auto;
    }

    .menu-item-wrapper {
        position: relative;
    }

    .menu-trigger, .menu-link {
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.5rem 0.75rem;
        transition: opacity 0.2s;
        white-space: nowrap;
        background: none;
        border: none;
        cursor: pointer;
    }

    .menu-trigger:hover, .menu-link:hover {
        opacity: 0.8;
        color: var(--toolbar-hover);
    }

    .menu-icon {
        font-size: 1.2rem;
    }

    .menu-arrow {
        font-size: 0.8rem;
        margin-left: 0.2rem;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 220px;
        background: inherit;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        padding: 0.5rem 0;
        z-index: 1001;
    }

    /* Правая секция */
    .right-section {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
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
    }

    .toolbar.scrolled .search-toggle img {
        filter: none;
    }

    .search-form {
        display: flex;
        align-items: center;
    }

    .search-input {
        padding: 0.5rem 1rem;
        border: 1px solid;
        border-radius: 20px;
        font-family: var(--font-family-main);
        font-size: 0.9rem;
        outline: none;
        transition: all 0.2s;
        width: 200px;
        background-color: rgba(255,255,255,0.1);
    }

    .search-input:focus {
        border-width: 2px;
        background-color: rgba(255,255,255,0.15);
    }

    .search-input::placeholder {
        color: inherit;
        opacity: 0.7;
    }

    /* Мобильное меню */
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

    .search-form.mobile {
        margin-top: 1rem;
        width: 100%;
    }

    .search-form.mobile .search-input {
        width: 100%;
    }

    .search-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        margin-left: 0.5rem;
    }

    .search-button img {
        filter: brightness(0) invert(1);
        width: 20px;
        height: 20px;
    }

    .toolbar.scrolled .search-button img {
        filter: none;
    }

    /* Адаптивность */
    @media (max-width: 768px) {
        .desktop-menu {
            display: none;
        }

        .menu-toggle {
            display: flex;
        }

        .mobile-menu {
            display: block;
        }

        .right-section {
            margin-left: auto;
        }
    }

    @media (min-width: 769px) {
        .mobile-only {
            display: none !important;
        }
    }
</style>