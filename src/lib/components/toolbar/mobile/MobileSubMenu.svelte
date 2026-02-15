<script>
    import MobileMenu from './MobileMenu.svelte';
    
    export let item;
    export let index;
    export let level;
    export let textColor;
    export let backgroundColor;
    export let isOpen;
    export let onToggle;
    export let onClose;
    
    function handleTitleClick(e) {
        if (item.href) {
            e.stopPropagation(); // предотвращаем всплытие к кнопке
            window.location.href = item.href;
            onClose();
        }
    }
    
    function handleArrowClick(e) {
        e.stopPropagation(); // предотвращаем всплытие к заголовку
        onToggle();
    }
</script>

<div class="mobile-item">
    <div class="mobile-trigger-container">
        <!-- Заголовок с возможностью перехода по ссылке -->
        {#if item.href}
            <a 
                href={item.href}
                class="mobile-title-link"
                style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;"
                on:click={handleTitleClick}
            >
                {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                <span class="item-title">{item.title}</span>
            </a>
        {:else}
            <span class="mobile-title-text" style="color: {textColor}; padding-left: {level * 1.5 + 0.5}rem;">
                {#if item.icon}<span class="item-icon">{item.icon}</span>{/if}
                <span class="item-title">{item.title}</span>
            </span>
        {/if}
        
        <!-- Стрелка для открытия/закрытия подменю -->
        <button 
            class="mobile-arrow-button"
            style="color: {textColor};"
            on:click={handleArrowClick}
            aria-label={isOpen ? 'Закрыть подменю' : 'Открыть подменю'}
        >
            <span class="trigger-arrow">{isOpen ? '−' : '+'}</span>
        </button>
    </div>
    
    {#if isOpen}
        <div class="mobile-submenu">
            <MobileMenu 
                items={item.dropdown}
                level={level + 1}
                {textColor}
                {backgroundColor}
                {onClose}
            />
        </div>
    {/if}
</div>

<style>
    .mobile-item {
        width: 100%;
    }
    
    .mobile-trigger-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transition: background 0.2s;
    }
    
    .mobile-trigger-container:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .mobile-title-link, .mobile-title-text {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        font-family: var(--font-family-main);
        font-size: 1rem;
        text-decoration: none;
        flex: 1;
        box-sizing: border-box;
    }
    
    .mobile-title-link {
        cursor: pointer;
    }
    
    .mobile-title-link:active {
        opacity: 0.7;
    }
    
    .mobile-title-text {
        cursor: default;
    }
    
    .mobile-arrow-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
        min-width: 3rem;
    }
    
    .mobile-arrow-button:hover {
        background: rgba(255, 255, 255, 0.15);
    }
    
    .mobile-arrow-button:active {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .trigger-arrow {
        font-size: 1.2rem;
        font-weight: 300;
        opacity: 0.8;
    }
    
    .mobile-submenu {
        width: 100%;
    }
    
    .item-icon {
        font-size: 1.1rem;
        min-width: 1.5rem;
        text-align: center;
    }
</style>