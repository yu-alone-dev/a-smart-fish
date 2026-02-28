<script>
  export let title = '';
  export let description = '';
  export let classListTitle = 'center';
  export let classListDescription = 'center';
  export let colorTitle = 'var(--color-texts-main)';
  export let colorDescription = 'var(--color-texts-main)';

  console.log(description)

  classListTitle = `title ${classListTitle}`;
  classListDescription = `description ${classListDescription}`;

  // Проверяем, является ли description массивом
  $: isDescriptionArray = Array.isArray(description);
</script>

<div class="section-header">
  {#if title}
    <h2 class={classListTitle} style="color: {colorTitle};">{@html title}</h2>
  {/if}
  
  {#if description}
    {#if isDescriptionArray}
      <!-- Если description - массив, выводим каждый элемент в отдельном параграфе -->
      {#each description as item, index}
        <p class={classListDescription} style="color: {colorDescription};">
          {@html item}
        </p>
      {/each}
    {:else}
      <!-- Если description - строка, выводим как обычно -->
      <p class={classListDescription} style="color: {colorDescription};">{@html description}</p>
    {/if}
  {/if}
</div>

<style>
  .title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-title);
    color: var(--color-texts-main);
    font-weight: 700;
    display: inline-table;
    padding-bottom: 10px;
  }

  .description {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-description);
    color: var(--color-texts-main);
    font-weight: 400;
    display: inline-table;
    margin: 0;
  }
  .description + .description {
    margin-top: 0.5rem;
  }
</style>