<script>
    export let axis = 'vertical';
    export let line = false;
    export let size = '1rem';
    export let color = '#e5e7eb';
    export let thickness = '1px';
</script>

{#if line}
    <!-- Разделитель с линией -->
    {#if axis === 'vertical'}
        <div class="line-vertical" style="border-top: {thickness} solid {color}; margin: {size} 0;"></div>
    {:else}
        <div class="line-horizontal" style="border-left: {thickness} solid {color}; margin: 0 {size};"></div>
    {/if}
{:else}
    <!-- Простой отступ -->
    {#if axis === 'vertical'}
        <div style="height: {size}; width: 100%;"></div>
    {:else}
        <div style="width: {size}; height: 100%;"></div>
    {/if}
{/if}