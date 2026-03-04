<script>
  export let title = '';
  export let description = '';
  export let classListTitle = 'center';
  export let classListDescription = 'center';
  export let colorTitle = 'var(--color-texts-main)';
  export let colorDescription = 'var(--color-texts-main)';
  export let fontSizeTitle = 'var(--font-size-card-title)';
  export let fontSizeDescription  = 'var(--font-size-card-description';
  console.log(description)

  classListTitle = `title ${classListTitle}`;
  classListDescription = `description ${classListDescription}`;

  // Проверяем, является ли description массивом
  $: isDescriptionArray = Array.isArray(description);
</script>

<div class="section-header">
  {#if title}
    <h2 class={classListTitle} style="color: {colorTitle}; font-size: {fontSizeTitle};">{@html title}</h2>
  {/if}
  
  {#if description}
    {#if isDescriptionArray}
      <!-- Если description - массив, выводим каждый элемент в отдельном параграфе -->
      {#each description as item, index}
        <p class={classListDescription} style="color: {colorDescription}; font-size: {fontSizeDescription};">
          {@html item}
        </p>
      {/each}
    {:else}
      <!-- Если description - строка, выводим как обычно -->
      <p class={classListDescription} style="color: {colorDescription}; font-size: {fontSizeDescription};">{@html description}</p>
    {/if}
  {/if}
</div>

<style>
  .title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-title);
    color: var(--color-texts-main);
    font-weight: 700;
    padding-bottom: 10px;
  }

  .description {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-description);
    line-height: 1.5;
    color: var(--color-texts-main);
    font-weight: 400;
    margin: 0;
  }
  .description + .description {
    margin-top: 0.5rem;
  }

  p {
    display: table;
  }

  h2 {
    display: table;
  }
</style>