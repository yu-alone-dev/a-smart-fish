<script>
    export let orientation = 'vertical';
    export let content = 'start';
    export let gap = '0'; // Добавляем gap для отступов между элементами
    export let equalWidth = false; // Флаг для равной ширины элементов
    
    $: xclass = `container content-${content}`;
    $: containerStyle = `
        gap: ${gap};
        ${equalWidth && orientation === 'horizontal' ? '& > * { flex: 1; }' : ''}
    `;
</script>

<div
    class={xclass}
    class:vertical={orientation === 'vertical'}
    class:horizontal={orientation === 'horizontal'}
    class:equal-width={equalWidth}
    style="gap: {gap};">
    <slot />
</div>

<style>
    .container {
        max-width: 70rem;
        display: flex;
        width: 100%;
    }

    .vertical {
        flex-direction: column;
    }

    .horizontal {
        flex-direction: row;
    }

    /* Равная ширина для горизонтальных контейнеров */
    .horizontal.equal-width > * {
        flex: 1 1 0; /* Равное распределение пространства */
        min-width: 0; /* Предотвращает переполнение */
    }

    .content-start {
        justify-content: flex-start;
    }
    .content-center {
        justify-content: center;
    }
    .content-end {
        justify-content: flex-end;
    }
    .content-evenly {
        justify-content: space-evenly;
    }
    .content-between {
        justify-content: space-between;
    }
    .content-around {
        justify-content: space-around;
    }

    @media (max-width: 640px) {
        .horizontal {
            flex-direction: column;
        }
        
        .horizontal.equal-width > * {
            flex: none; /* На мобильных отключаем равную ширину */
            width: 100%;
        }
    }
</style>