<script>
    export let orientation = 'vertical';
</script>

<div class="container" class:vertical={orientation === 'vertical'} class:horizontal={orientation === 'horizontal'}>
    <slot />
</div>

<style>
    .container {
        max-width: 65rem;
        display: flex;
        width: 100%;
    }

    .vertical {
        flex-direction: column;
    }

    .horizontal {
        flex-direction: row;
    }

    @media (max-width: 640px) {
        .horizontal {
            flex-direction: column;
        }
    }
</style>