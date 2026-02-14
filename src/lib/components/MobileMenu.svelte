<script>
    export let items = [];
    export let level = 0;
    export let textColor = 'var(--color-texts-main-light)';
    export let backgroundColor = 'var(--color-background-button)';
    export let onClose = () => {};
    
    let openItems = {};
    
    function toggleItem(index) {
        openItems[index] = !openItems[index];
    }
</script>

<div class="mobile-menu-container">
    {#each items as item, index}
        {#if item.dropdown && item.dropdown.length}
            <!-- Элемент с подменю -->
            <div class="mobile-item">
                <button 
                    class="mobile-trigger"
                    style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;"
                    on:click={() => toggleItem(index)}
                >
                    <span class="trigger-content">
                        {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                        <span class="item-title">{item.title}</span>
                    </span>
                    <span class="trigger-arrow">{openItems[index] ? '−' : '+'}</span>
                </button>
                
                {#if openItems[index]}
                    <div class="mobile-submenu">
                        <svelte:self 
                            items={item.dropdown}
                            level={level + 1}
                            {textColor}
                            {backgroundColor}
                            {onClose}
                        />
                    </div>
                {/if}
            </div>
        {:else}
            <!-- Обычная ссылка -->
            <a 
                href={item.href || '#'}
                class="mobile-link"
                style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;"
                on:click={onClose}
            >
                {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                <span class="item-title">{item.title}</span>
            </a>
        {/if}
    {/each}
</div>

<style>
    .mobile-menu-container {
        width: 100%;
    }
    
    .mobile-item {
        width: 100%;
    }
    
    .mobile-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        transition: background 0.2s;
        box-sizing: border-box;
    }
    
    .mobile-trigger:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .trigger-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .trigger-arrow {
        font-size: 1.2rem;
        font-weight: 300;
        opacity: 0.8;
    }
    
    .mobile-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        transition: background 0.2s;
        box-sizing: border-box;
    }
    
    .mobile-link:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .mobile-submenu {
        width: 100%;
    }
    
    .item-icon {
        font-size: 1.1rem;
    }
</style>