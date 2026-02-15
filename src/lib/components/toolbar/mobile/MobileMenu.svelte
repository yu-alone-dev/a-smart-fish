<script>
    import MobileSubmenu from './MobileSubmenu.svelte';
    import SearchForm from '../shared/SearchForm.svelte';
    
    export let items = [];
    export let level = 0;
    export let textColor = '';
    export let backgroundColor = '';
    export let onClose = () => {};
    export let onSearch = () => {};
    export let searchQuery = '';
    export let onSearchQueryChange = () => {};
    export let searchVisible = false;
    
    let openItems = {};
    
    function toggleItem(index) {
        openItems[index] = !openItems[index];
    }
    
    function handleSearchQueryChange(e) {
        onSearchQueryChange(e.detail);
    }
    
    function handleSearchSubmit(e) {
        onSearch(e);
        onClose();
    }
</script>

<div class="mobile-menu-container">
    <!-- Поиск вверху мобильного меню -->
    {#if searchVisible}
        <div class="mobile-search">
            <SearchForm 
                query={searchQuery}
                on:query={handleSearchQueryChange}
                onSubmit={handleSearchSubmit}
                {textColor}
                variant="mobile"
                inputId="search-input-mobile"
            />
        </div>
    {/if}

    <!-- Навигационное меню -->
    <div class="mobile-nav">
        {#each items as item, index}
            {#if item.dropdown?.length}
                <MobileSubmenu 
                    {item}
                    {index}
                    {level}
                    {textColor}
                    {backgroundColor}
                    isOpen={openItems[index]}
                    onToggle={() => toggleItem(index)}
                    onClose={onClose}
                />
            {:else}
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
</div>

<style>
    .mobile-menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .mobile-search {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 0.5rem;
        flex-shrink: 0;
    }
    
    .mobile-nav {
        flex: 1;
        overflow-y: auto;
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
        width: 100%;
    }
    
    .mobile-link:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .item-icon {
        font-size: 1.1rem;
        min-width: 1.5rem;
        text-align: center;
    }
    
    .item-title {
        flex: 1;
    }
</style>