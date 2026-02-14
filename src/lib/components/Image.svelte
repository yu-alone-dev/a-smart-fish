<script>
    export let src = ''; // может быть ID с Google Drive или локальный путь
    export let alt = '';
    export let href = '';
    export let page = ''; // для локальных файлов (main, learn и т.д.)
    export let loading = 'lazy';
    export let fromGoogleDrive = true; // по умолчанию true, так как вы используете ID

    // Формируем правильный URL
    $: imageUrl = fromGoogleDrive 
        ? `https://corsproxy.io/?https://drive.google.com/uc?export=view&id=${src}`  // для Google Drive
        : page 
            ? `/imgs/${page}/${src}`  // для локальных файлов
            : src;  // если уже полный URL
</script>

{#if href}
    <a {href} class="image-link">
        <img src={imageUrl} {alt} {loading} class="image">
    </a>
{:else}
    <img src={imageUrl} {alt} {loading} class="image">
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