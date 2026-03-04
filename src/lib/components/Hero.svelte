<script>
    import { base } from '$app/paths';
    export let imageSrc = '';
    export let title = '';
    export let subtitle = '';
    export let titleColor = 'var(--color-texts-main-light)';
    export let subtitleColor = 'var(--color-texts-main-light)';
    export let overlayColor = 'var(--color-background-button)';
    export let overlayOpacity = '0.3';
    export let smallVersion = false;
    
    function scrollToContent() {
        window.scrollTo({
            top: window.innerHeight-50,
            behavior: 'smooth'
        });
    }
    
    $: fullSrc = imageSrc.startsWith('http') 
        ? imageSrc 
        : `${base}${imageSrc}`;;
</script>

<svelte:head>
  <title>{title.replace('<br>', ' ')}</title>
</svelte:head>

<section 
    class={"hero" + (smallVersion ? ' hero-small' : '')}
    style="background-image: url('{fullSrc}');"
>
    <div 
        class="hero-overlay"
        style="background: {overlayColor}; opacity: {overlayOpacity};"
    ></div>
    
    <div class="hero-content">
        {#if title}
            <div class="title-wrapper">
                <h1 class="hero-title" style="color: {titleColor};">{@html title}</h1>
            </div>
        {/if}
        
        {#if subtitle}
            <p class="hero-subtitle" style="color: {subtitleColor};">{subtitle}</p>
        {/if}
    </div>
    
    {#if !smallVersion}
    <button class="scroll-indicator" on:click={scrollToContent}>
        <span>▼</span>
        <span class="scroll-text">Листайте вниз</span>
    </button>
    {/if}
</section>

<style>
    .hero {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-small {
        height: 50vh;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 900px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .title-wrapper {
        display: flex; /* Меняем на flex для лучшего контроля */
        justify-content: center;
        align-items: center;
        background: transparent;
        border: 0.5rem solid var(--color-texts-main-light);
        padding: 2rem 2rem; /* Уменьшаем паддинги */
        margin: 0;
        width: 800px; /* Фиксированная ширина рамки */
        max-width: 90vw; /* Но на мобильных не более 90% экрана */
        min-height: 200px; /* Минимальная высота */
        box-sizing: border-box; /* Чтобы padding не увеличивал ширину */
    }

    .hero-title {
        font-family: var(--font-family-main);
        font-size: clamp(2rem, 6vw, 5rem);
        font-weight: 700;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        line-height: 1.2;
    }

    .hero-subtitle {
        font-family: var(--font-family-main);
        font-size: clamp(1rem, 2.5vw, 2rem);
        font-weight: 400;
        margin: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        max-width: 600px;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        background: none;
        border: none;
        color: var(--color-texts-main-light);
        cursor: pointer;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        animation: fadeInUp 2.5s infinite;
        font-size: 2rem;
        font-family: var(--font-family-main);
    }

    .scroll-text {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--color-texts-main-light);
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        50% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }

    @media (max-width: 768px) {
        .hero-content {
            padding: 1.5rem;
            gap: 1.5rem;
        }
        
        .scroll-indicator {
            bottom: 2rem;
            font-size: 1.5rem;
        }
        
        .title-wrapper {
            padding: 2rem 4rem;
        }
    }

    @media (max-width: 480px) {
        .hero-content {
            padding: 1rem;
            gap: 1rem;
        }
    }
</style>