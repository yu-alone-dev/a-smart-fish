<script>
    export let logoSrc = '';
    export let base = '';
    export let color = '';
    
    $: fullLogoSrc = logoSrc?.startsWith('http') 
        ? logoSrc 
        : `${base}${logoSrc}`;
</script>

<div class="logo">
    {#if fullLogoSrc}
        <a href="/">
            <img src={fullLogoSrc} alt="Logo" class="logo-img rotating">
        </a>
    {:else}
        <a href="/" class="logo-text" style="color: {color};">
            Логотип
        </a>
    {/if}
</div>

<style>
    .logo {
        flex-shrink: 0;
    }

    .logo-img {
        height: 40px;
        width: auto;
    }

    .rotating {
        animation: spin-counterclockwise 10s linear infinite;
    }

    @keyframes spin-counterclockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
    }

    .logo-text {
        font-family: var(--font-family-main);
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1px;
    }
</style>