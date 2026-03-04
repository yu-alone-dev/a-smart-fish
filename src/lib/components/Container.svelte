<script>
    export let orientation = 'vertical';
    export let content = 'start';
    $: xclass = `container content-${content}`;
</script>

<div
    class={xclass}
    class:vertical={orientation === 'vertical'}
    class:horizontal={orientation === 'horizontal'}>
    <slot />
</div>

<style>
    .container {
        max-width: 90rem;
        display: flex;
        width: 100%;
    }

    .vertical {
        flex-direction: column;
    }

    .horizontal {
        flex-direction: row;
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

    @media (max-width: 640px) {
        .horizontal {
            flex-direction: column;
        }
    }
</style>