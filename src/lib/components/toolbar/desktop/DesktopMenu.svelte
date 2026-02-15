<script>
    import DesktopDropdown from './DesktopDropdown.svelte';
    
    export let items = [];
    export let textColor = '';
    export let backgroundColor = '';
    
    let openDropdown = null;
    let hoverTimeout = null;
    
    function handleMouseEnter(index) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            openDropdown = index;
        }, 100); // небольшая задержка для предотвращения случайных открытий
    }
    
    function handleMouseLeave() {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            openDropdown = null;
        }, 200); // задержка перед закрытием, чтобы можно было переместить мышь в подменю
    }
    
    function handleTitleClick(e, item) {
        e.stopPropagation(); // предотвращаем всплытие события
        if (item.href) {
            window.location.href = item.href;
        }
    }
    
    function handleArrowClick(e, index) {
        e.stopPropagation(); // предотвращаем всплытие события
        e.preventDefault(); // предотвращаем возможное действие по умолчанию
        openDropdown = openDropdown === index ? null : index;
    }
</script>

<div class="desktop-menu">
    {#each items as item, index}
        <div class="menu-item-wrapper">
            {#if item.dropdown?.length}
                <div 
                    class="menu-trigger-container"
                    on:mouseenter={() => handleMouseEnter(index)}
                    on:mouseleave={handleMouseLeave}
                >
                    <!-- Заголовок с возможностью перехода по ссылке -->
                    {#if item.href}
                        <a 
                            href={item.href}
                            class="menu-title-link"
                            style="color: {textColor};"
                            on:click={(e) => handleTitleClick(e, item)}
                        >
                            {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                            <span class="menu-title">{item.title}</span>
                        </a>
                    {:else}
                        <span class="menu-title-text" style="color: {textColor};">
                            {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                            <span class="menu-title">{item.title}</span>
                        </span>
                    {/if}
                    
                    <!-- Стрелка для открытия подменю -->
                    <button 
                        class="menu-arrow-button"
                        style="color: {textColor};"
                        on:click={(e) => handleArrowClick(e, index)}
                        aria-label="Открыть подменю"
                    >
                        <span class="menu-arrow">{openDropdown === index ? '▼' : '▶'}</span>
                    </button>
                </div>
                
                {#if openDropdown === index}
                    <div 
                        class="dropdown-menu"
                        on:mouseenter={() => handleMouseEnter(index)}
                        on:mouseleave={handleMouseLeave}
                        style="background-color: {backgroundColor};"
                    >
                        <DesktopDropdown 
                            items={item.dropdown} 
                            level={1}
                            {textColor}
                            {backgroundColor}
                        />
                    </div>
                {/if}
            {:else}
                <a 
                    href={item.href || '#'}
                    class="menu-link"
                    style="color: {textColor};"
                >
                    {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                    <span class="menu-title">{item.title}</span>
                </a>
            {/if}
        </div>
    {/each}
</div>

<style>
    .desktop-menu {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-left: auto;
        margin-right: 1rem;
    }
    
    .menu-item-wrapper {
        position: relative;
    }
    
    .menu-trigger-container {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .menu-trigger-container:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .menu-title-link, .menu-title-text {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        text-decoration: none;
        font-family: var(--font-family-main);
        font-size: 1rem;
        cursor: pointer;
    }
    
    .menu-title-link {
        cursor: pointer;
    }
    
    .menu-title-link:hover {
        opacity: 0.8;
        color: var(--toolbar-hover);
    }
    
    .menu-title-text {
        cursor: default;
    }

    .menu-icon {
        font-size: 1.2rem;
    }

    .menu-arrow-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.2rem 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        transition: background-color 0.2s;
    }
    
    .menu-arrow-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .menu-arrow {
        font-size: 0.8rem;
        display: inline-block;
    }

    .menu-link {
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.5rem 0.75rem;
        transition: opacity 0.2s;
        white-space: nowrap;
        border-radius: 4px;
    }

    .menu-link:hover {
        opacity: 0.8;
        color: var(--toolbar-hover);
        background: rgba(255, 255, 255, 0.1);
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

    .menu-item-wrapper:last-child .dropdown-menu {
        right: 0;
        left: auto;
    }
</style>