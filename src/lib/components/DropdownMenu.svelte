<script>
    export let items = [];
    export let level = 0;
    export let textColor = 'var(--color-texts-main-light)';
    export let backgroundColor = 'var(--color-background-button)';
    
    let openSubmenu = null;
    
    function toggleSubmenu(index) {
        openSubmenu = openSubmenu === index ? null : index;
    }
</script>

<div class="dropdown-menu-container">
    {#each items as item, index}
        {#if item.dropdown && item.dropdown.length}
            <!-- Элемент с подменю -->
            <div class="submenu-wrapper">
                <button 
                    class="dropdown-item submenu-trigger"
                    style="color: {textColor}; padding-left: {level * 0.5 + 0.5}rem;"
                    on:mouseenter={() => openSubmenu = index}
                    on:mouseleave={() => openSubmenu = null}
                >
                    <span class="item-content">
                        {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                        <span class="item-title">{item.title}</span>
                    </span>
                    <span class="submenu-arrow">▶</span>
                </button>
                
                {#if openSubmenu === index}
                    <!-- Подменю с автоматическим позиционированием -->
                    <div 
                        class="submenu"
                        class:submenu-right={level % 2 === 0}
                        class:submenu-left={level % 2 === 1}
                        style="background-color: {backgroundColor};"
                        on:mouseenter={() => openSubmenu = index}
                        on:mouseleave={() => openSubmenu = null}
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
            <!-- Обычная ссылка -->
            <a 
                href={item.href || '#'}
                class="dropdown-item"
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
    
    .dropdown-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        background: none;
        border: none;
        width: 100%;
        cursor: pointer;
        transition: background 0.2s;
        box-sizing: border-box;
        white-space: nowrap;
    }
    
    .dropdown-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .item-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .item-icon {
        font-size: 1.1rem;
    }
    
    .submenu-arrow {
        font-size: 0.8rem;
        opacity: 0.8;
        margin-left: 0.5rem;
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
    
    /* Для первого уровня меню (открывается вправо) */
    .submenu-wrapper:first-child > .submenu-right {
        left: 100%;
    }
    
    /* Если не помещается справа, можно добавить медиа-запрос */
    @media (max-width: 1200px) {
        .submenu-right {
            left: auto;
            right: 100%;
        }
    }
</style>