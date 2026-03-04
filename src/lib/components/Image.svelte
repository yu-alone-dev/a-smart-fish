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
    export let containerWidth = ''; // ширина контейнера (если нужна)
    export let containerHeight = ''; // высота контейнера (если нужна)
    export let align = 'center';     // выравнивание: 'center', 'left', 'right', 'top', 'bottom'

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
        object-position: ${getObjectPosition(align)};
    `;

    // Стили для контейнера (ссылки или div)
    $: containerStyle = `
        ${containerWidth ? `width: ${containerWidth};` : ''}
        ${containerHeight ? `height: ${containerHeight};` : ''}
        display: flex;
        justify-content: ${getJustifyContent(align)};
        align-items: ${getAlignItems(align)};
        overflow: hidden;
    `;

    // Вспомогательные функции для преобразования align в CSS значения
    function getJustifyContent(align) {
        const horizontalMap = {
            'left': 'flex-start',
            'center': 'center',
            'right': 'flex-end',
            'top': 'center',     // для top используем center по горизонтали
            'bottom': 'center'   // для bottom используем center по горизонтали
        };
        return horizontalMap[align] || 'center';
    }

    function getAlignItems(align) {
        const verticalMap = {
            'top': 'flex-start',
            'center': 'center',
            'bottom': 'flex-end',
            'left': 'center',     // для left используем center по вертикали
            'right': 'center'     // для right используем center по вертикали
        };
        return verticalMap[align] || 'center';
    }

    function getObjectPosition(align) {
        const positionMap = {
            'left': 'left center',
            'right': 'right center',
            'top': 'center top',
            'bottom': 'center bottom',
            'center': 'center center'
        };
        return positionMap[align] || 'center center';
    }
</script>

{#if href}
    <a 
        {href} 
        class="image-container image-link {classLink}" 
        style={containerStyle}
    >
        <img 
            src={fullSrc} 
            {alt} 
            {loading} 
            class={imgClasses}
            style={imgStyle}
        >
    </a>
{:else}
    <div 
        class="image-container {classLink}" 
        style={containerStyle}
    >
        <img 
            src={fullSrc} 
            {alt} 
            {loading} 
            class={imgClasses}
            style={imgStyle}
        >
    </div>
{/if}

<style>
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 auto; /* Центрирование самого контейнера если нужно */
    }

    .image-link {
        display: flex; /* Переопределяем inline-block на flex */
        text-decoration: none;
        cursor: pointer;
        line-height: 0;
    }

    .image-link:hover {
        opacity: 0.9;
    }

    .image {
        display: block;
        max-width: none; /* Убираем ограничение max-width */
        transition: all 0.3s ease;
        flex-shrink: 0; /* Запрещаем сжатие изображения */
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

    /* Адаптивность - теперь изображение центрируется в контейнере */
    @media (max-width: 640px) {
        .image-container {
            width: 100% !important;
            height: auto !important;
            min-height: 200px; /* Минимальная высота для контейнера на мобильных */
        }
        
        .image {
            width: 100% !important;
            height: auto !important;
            object-fit: contain; /* На мобильных лучше contain чтобы видеть всё изображение */
        }
    }
</style>