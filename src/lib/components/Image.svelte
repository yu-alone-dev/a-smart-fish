<script>
    export let src = '';
    export let alt = '';
    export let href = '';
    export let page = '';
    export let loading = 'lazy';

    // Формируем полный путь к изображению
    $: fullSrc = page ? `$https://drive.google.com/uc?export=view&id={page}/${src}` : `https://drive.google.com/uc?export=view&id=${src}`;
</script>

{#if href}
    <a {href} class="image-link">
        <img src={fullSrc} {alt} {loading} class="image">
    </a>
    {:else}
    <img src={fullSrc} {alt} {loading} class="image">
{/if}

<style>
    .image-link {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    }

    .image-link:hover {
    opacity: 0.9;
    }

    .image {
    max-width: 100%;
    height: auto;
    display: block;
    }
</style>