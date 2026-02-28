<script>
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';
    
    export let query = '';
    export let onSubmit = () => {};
    export let textColor = '';
    export let variant = 'desktop'; // 'desktop' or 'mobile'
    export let inputId = 'search-input';
    
    const dispatch = createEventDispatcher();
    
    function handleInput(e) {
        dispatch('query', e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(e);
    }
</script>

<form 
    class="search-form"
    class:mobile={variant === 'mobile'}
    on:submit={handleSubmit}
>
    <input 
        {inputId}
        type="text" 
        class="search-input"
        placeholder="Поиск по сайту..."
        value={query}
        on:input={handleInput}
        style="
            background-color: rgba(255,255,255,0.1);
            color: {textColor};
            border-color: {textColor};
        "
    >
    {#if variant === 'mobile'}
        <button 
            type="submit" 
            class="search-button"
            style="color: {textColor};"
            aria-label="Найти"
        >
            <img src="{base}/icons/search.svg" alt="" width="20" height="20">
        </button>
    {/if}
</form>

<style>
    .search-form {
        display: flex;
        align-items: center;
    }
    
    .search-form.mobile {
        width: 100%;
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
    
    .search-form.mobile .search-input {
        width: 100%;
    }

    .search-input:focus {
        border-width: 2px;
        background-color: rgba(255,255,255,0.15);
    }

    .search-input::placeholder {
        color: inherit;
        opacity: 0.7;
    }
    
    .search-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-button img {
        filter: brightness(0) invert(1);
        width: 20px;
        height: 20px;
        transition: filter 0.3s;
    }
</style>