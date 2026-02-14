<script>
  export let title = '';
  export let description = '';
  export let color = 'var(--color-texts-main)';
</script>

<div class="section-header">
  {#if title}
    <h2 class="title center" style="color: {color};">{@html title}</h2>
  {/if}
  {#if description}
    <p class="description center" style="color: {color};">{@html description}</p>
  {/if}
</div>

<style>
  .title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-title);
    color: var(--color-texts-main);
    font-weight: 700;
  }

  .description {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-description);
    color: var(--color-texts-main);
    font-weight: 400;
  }
</style>