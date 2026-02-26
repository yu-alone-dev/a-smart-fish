<script>
    import { base } from '$app/paths';

    export let src = '';
    export let alt = '';
    export let href = '';
    export let page = '';
    export let loading = 'lazy';
    export let size = 'auto'; // 'auto', 'small', 'medium', 'large', 'full', или конкретное значение (например '300px')
    export let width = '';     // конкретная ширина (переопределяет size)
    export let height = '';    // конкретная высота
    export let objectFit = 'cover'; // 'cover', 'contain', 'fill', 'scale-down'
    export let rounded = false;     // скругленные углы
    export let shadow = false;      // тень
    export let border = false;      // рамка
    export let classImg = '';       // дополнительные классы для изображения
    export let classLink = '';      // дополнительные классы для ссылки

    $: fullSrc = page 
        ? `${base}/imgs/${page}/${src}` 
        : `${base}/imgs/${src}`;

    // Определение размеров на основе значения size
    $: imageSize = (() => {
        if (width) return { width, height: height || 'auto' };
        
        switch(size) {
            case 'small':
                return { width: '200px', height: height || 'auto' };
            case 'medium':
                return { width: '400px', height: height || 'auto' };
            case 'large':
                return { width: '600px', height: height || 'auto' };
            case 'full':
                return { width: '100%', height: height || 'auto' };
            case 'auto':
            default:
                return { width: 'auto', height: height || 'auto' };
        }
    })();

    // Классы для изображения
    $: imgClasses = [
        'image',
        rounded ? 'rounded' : '',
        shadow ? 'shadow' : '',
        border ? 'border' : '',
        classImg
    ].filter(Boolean).join(' ');

    // Стили для изображения
    $: imgStyle = `
        width: ${imageSize.width};
        height: ${imageSize.height};
        object-fit: ${objectFit};
    `;
</script>

{#if href}
    <a {href} class="image-link {classLink}" style={href ? '' : ''}>
        <img 
            src={fullSrc} 
            {alt} 
            {loading} 
            class={imgClasses}
            style={imgStyle}
        >
    </a>
{:else}
    <img 
        src={fullSrc} 
        {alt} 
        {loading} 
        class={imgClasses}
        style={imgStyle}
    >
{/if}

<style>
    .image-link {
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
        line-height: 0; /* Убирает лишний отступ под изображением */
    }

    .image-link:hover {
        opacity: 0.9;
    }

    .image {
        display: block;
        max-width: 100%;
        transition: all 0.3s ease;
    }

    /* Скругление */
    .rounded {
        border-radius: 8px;
    }

    /* Тень */
    .shadow {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Рамка */
    .border {
        border: 2px solid var(--color-border, #ddd);
    }

    /* Адаптивность */
    @media (max-width: 640px) {
        .image {
            width: 100% !important; /* На мобильных устройствах изображение на всю ширину */
            height: auto !important;
        }
    }
</style>