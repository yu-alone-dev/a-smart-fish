<script>
    import { onMount, onDestroy } from 'svelte';
    
    export let items = [];
    export let autoPlay = false;
    export let autoPlayInterval = 5000;
    export let pauseTime = 10000;
    export let showProgress = true;
    export let showNavigation = true;
    export let height = 'auto';
    export let verticalAlign = 'center';
    
    let currentIndex = 0;
    let progressInterval;
    let isPlaying = autoPlay;
    let pauseTimeout;
    
    const next = () => {
        if (!items.length) return;
        currentIndex = (currentIndex + 1) % items.length;
        handleManualInteraction();
    };
    
    const prev = () => {
        if (!items.length) return;
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        handleManualInteraction();
    };
    
    const goTo = (index) => {
        if (index === currentIndex) return;
        currentIndex = index;
        handleManualInteraction();
    };
    
    const handleManualInteraction = () => {
        stopAutoPlay();
        
        if (pauseTimeout) {
            clearTimeout(pauseTimeout);
        }
        
        if (autoPlay) {
            pauseTimeout = setTimeout(() => {
                isPlaying = true;
                startAutoPlay();
                pauseTimeout = null;
            }, pauseTime);
        }
    };
    
    const startAutoPlay = () => {
        if (!autoPlay || !isPlaying) return;
        stopAutoPlay();
        progressInterval = setInterval(() => {
            next();
        }, autoPlayInterval);
    };
    
    const stopAutoPlay = () => {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    };
    
    onMount(() => {
        if (autoPlay && isPlaying) {
            startAutoPlay();
        }
    });
    
    onDestroy(() => {
        stopAutoPlay();
        if (pauseTimeout) {
            clearTimeout(pauseTimeout);
        }
    });
    
    const handleMouseEnter = () => {
        if (autoPlay) {
            stopAutoPlay();
        }
    };
    
    const handleMouseLeave = () => {
        if (autoPlay && isPlaying && !pauseTimeout) {
            startAutoPlay();
        }
    };
</script>

<div 
    class="list-container"
    style={height !== 'auto' ? `height: ${height};` : ''}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    <!-- Контент с отступами для стрелок -->
    <div class="content-wrapper">
        <div class="list-content" style:transform={`translateX(-${currentIndex * 100}%)`}>
            {#each items as item, index}
                <div 
                    class="list-item"
                    class:align-top={verticalAlign === 'top'}
                    class:align-center={verticalAlign === 'center'}
                    class:align-bottom={verticalAlign === 'bottom'}
                >
                    <slot {item} {index} />
                </div>
            {/each}
        </div>
    </div>
    
    {#if showNavigation && items.length > 1}
        <div class="navigation-buttons">
            <button class="nav-button prev" on:click={prev} aria-label="Previous slide">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="nav-button next" on:click={next} aria-label="Next slide">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    {/if}
    
    {#if showProgress && items.length > 1}
        <div class="progress-section">
            <div class="progress-indicators">
                {#each items as _, index}
                    <button 
                        class="indicator"
                        class:active={index === currentIndex}
                        on:click={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex}
                    />
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .list-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    
    /* Обертка для контента с отступами */
    .content-wrapper {
        margin: 0 60px; /* Отступы для стрелок */
        overflow: hidden;
    }
    
    .list-content {
        display: flex;
        width: 100%;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        min-height: inherit;
    }
    
    .list-item {
        flex: 0 0 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    /* Вертикальное выравнивание */
    .align-top {
        justify-content: flex-start;
    }
    
    .align-center {
        justify-content: center;
    }
    
    .align-bottom {
        justify-content: flex-end;
    }
    
    /* Навигационные кнопки */
    .navigation-buttons {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        pointer-events: none;
        z-index: 10;
    }
    
    .nav-button {
        pointer-events: auto;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        color: var(--color-background-scroller);
        opacity: 0.5;
        padding: 8px;
    }
    
    .nav-button:hover {
        opacity: 1;
        transform: scale(1.1);
    }
    
    .nav-button:focus-visible {
        outline: 2px solid var(--color-background-scroller);
        outline-offset: 2px;
        opacity: 1;
    }
    
    .nav-button svg {
        width: 48px;
        height: 48px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
    
    /* Прогресс секция */
    .progress-section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .progress-indicators {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #e0e0e0;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: all 0.2s;
        /* Центрирование полоски */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .indicator:hover {
        background: #bdbdbd;
        transform: scale(1.2);
    }
    
    .indicator.active {
        width: 40px;
        height: 4px;
        border-radius: 2px;
        background: var(--color-background-scroller);
        transform: none;
        /* Центрируем полоску */
        margin: 4px 0; /* Компенсируем разницу в высоте */
    }
    
    .indicator:focus-visible {
        outline: 2px solid var(--color-background-scroller);
        outline-offset: 2px;
    }
    
    @media (max-width: 640px) {
        .content-wrapper {
            margin: 0 20px; /* Уменьшаем отступы на мобильных */
        }
        
        .navigation-buttons {
            position: static;
            transform: none;
            padding: 1rem 0;
            justify-content: center;
            gap: 3rem;
        }
        
        .nav-button svg {
            width: 40px;
            height: 40px;
        }
        
        .indicator.active {
            width: 30px;
        }
    }
</style>