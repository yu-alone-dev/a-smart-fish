<script>
    export let items = [];
    export let level = 0;
    export let textColor = '';
    export let backgroundColor = '';
    
    let openSubmenu = null;
    let hoverTimeout = null;
    
    function handleMouseEnter(index) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            openSubmenu = index;
        }, 100);
    }
    
    function handleMouseLeave() {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            openSubmenu = null;
        }, 200);
    }
    
    function handleTitleClick(e, item) {
        e.stopPropagation();
        if (item.href) {
            window.location.href = item.href;
        }
    }
    
    function handleArrowClick(e, index) {
        e.stopPropagation();
        e.preventDefault();
        openSubmenu = openSubmenu === index ? null : index;
    }
</script>

<div class="dropdown-menu-container">
    {#each items as item, index}
        {#if item.dropdown?.length}
            <div class="submenu-wrapper">
                <div 
                    class="dropdown-item-container"
                    on:mouseenter={() => handleMouseEnter(index)}
                    on:mouseleave={handleMouseLeave}
                >
                    <!-- Заголовок с возможностью перехода по ссылке -->
                    {#if item.href}
                        <a 
                            href={item.href}
                            class="item-title-link"
                            style="color: {textColor}; padding-left: {level * 0.5 + 0.5}rem;"
                            on:click={(e) => handleTitleClick(e, item)}
                        >
                            {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                            <span class="item-title">{item.title}</span>
                        </a>
                    {:else}
                        <span class="item-title-text" style="color: {textColor}; padding-left: {level * 0.5 + 0.5}rem;">
                            {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                            <span class="item-title">{item.title}</span>
                        </span>
                    {/if}
                    
                    <!-- Стрелка для открытия подменю -->
                    <button 
                        class="submenu-arrow-button"
                        style="color: {textColor};"
                        on:click={(e) => handleArrowClick(e, index)}
                        aria-label="Открыть подменю"
                    >
                        <span class="submenu-arrow">▶</span>
                    </button>
                </div>
                
                {#if openSubmenu === index}
                    <div 
                        class="submenu"
                        class:submenu-right={level % 2 === 0}
                        class:submenu-left={level % 2 === 1}
                        style="background-color: {backgroundColor};"
                        on:mouseenter={() => handleMouseEnter(index)}
                        on:mouseleave={handleMouseLeave}
                    >
                        <svelte:self 
                            items={item.dropdown}
                            level={level + 1}
                            {textColor}
                            {backgroundColor}
                        />
                    </div>
                {/if}
            </div>
        {:else}
            <a 
                href={item.href || '#'}
                class="dropdown-item-link"
                style="color: {textColor}; padding-left: {level * 0.5 + 0.5}rem;"
            >
                {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                <span class="item-title">{item.title}</span>
            </a>
        {/if}
    {/each}
</div>

<style>
    .dropdown-menu-container {
        width: 100%;
    }
    
    .submenu-wrapper {
        position: relative;
    }
    
    .dropdown-item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transition: background 0.2s;
    }
    
    .dropdown-item-container:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .item-title-link, .item-title-text {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        flex: 1;
        box-sizing: border-box;
        white-space: nowrap;
    }
    
    .item-title-link {
        cursor: pointer;
    }
    
    .item-title-link:hover {
        opacity: 0.8;
        color: var(--toolbar-hover);
    }
    
    .item-title-text {
        cursor: default;
    }
    
    .item-icon {
        font-size: 1.1rem;
    }
    
    .submenu-arrow-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
    }
    
    .submenu-arrow-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .submenu-arrow {
        font-size: 0.8rem;
        opacity: 0.8;
    }
    
    .dropdown-item-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        transition: background 0.2s;
        box-sizing: border-box;
        white-space: nowrap;
    }
    
    .dropdown-item-link:hover {
        background: rgba(255, 255, 255, 0.1);
        opacity: 0.8;
        color: var(--toolbar-hover);
    }
    
    .submenu {
        position: absolute;
        top: 0;
        min-width: 200px;
        background: inherit;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        padding: 0.5rem 0;
        z-index: 1002;
    }
    
    .submenu-right {
        left: 100%;
    }
    
    .submenu-left {
        right: 100%;
        left: auto;
    }
    
    @media (max-width: 1200px) {
        .submenu-right {
            left: auto;
            right: 100%;
        }
    }
</style>