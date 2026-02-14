<script>
    export let items = [];
    export let level = 0;
    export let textColor = 'var(--color-texts-main-light)';
    export let backgroundColor = 'var(--color-background-button)';
    
    let openItems = {};
    
    function toggleItem(index) {
        openItems[index] = !openItems[index];
    }
</script>

<div class="nested-menu" class:level-{level}>
    {#each items as item, index}
        <div class="menu-item">
            {#if item.dropdown && item.dropdown.length}
                <!-- Элемент с выпадающим списком -->
                <button 
                    class="menu-trigger"
                    style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;"
                    on:click={() => toggleItem(index)}
                >
                    <span class="menu-title">
                        {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                        <span>{item.title}</span>
                    </span>
                    <span class="menu-arrow">{openItems[index] ? '▼' : '▶'}</span>
                </button>
                
                {#if openItems[index]}
                    <div class="submenu">
                        <svelte:self 
                            items={item.dropdown}
                            level={level + 1}
                            {textColor}
                            {backgroundColor}
                        />
                    </div>
                {/if}
            {:else}
                <!-- Обычная ссылка -->
                <a 
                    href={item.href || '#'}
                    class="menu-link"
                    style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;"
                >
                    {#if item.icon}<span class="menu-icon">{item.icon}</span>{/if}
                    <span>{item.title}</span>
                </a>
            {/if}
        </div>
    {/each}
</div>

<style>
    .nested-menu {
        width: 100%;
    }
    
    .menu-item {
        width: 100%;
    }
    
    .menu-trigger, .menu-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        transition: background 0.2s;
        box-sizing: border-box;
    }
    
    .menu-trigger:hover, .menu-link:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .menu-title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .menu-icon {
        font-size: 1.2rem;
    }
    
    .menu-arrow {
        font-size: 0.8rem;
        opacity: 0.8;
    }
    
    .submenu {
        width: 100%;
    }
    
    /* Стили для разных уровней вложенности */
    .level-1 .menu-trigger,
    .level-1 .menu-link {
        font-size: 0.95rem;
    }
    
    .level-2 .menu-trigger,
    .level-2 .menu-link {
        font-size: 0.9rem;
    }
</style>