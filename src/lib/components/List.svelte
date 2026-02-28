<script>
  export let items = [];
  export let type = ['disc'];
  export let classList = 'left';
  export let color = 'var(--color-texts-main)';
  export let level = 0;
  export let title = '';
  export let classListTitle = 'center';
  export let colorTitle = 'var(--color-texts-main)';

  $: titleClasses = `title ${classListTitle}`;
</script>

<div class="list-wrapper">
  <!-- Блок заголовка -->
  {#if title}
    <div class="list-header">
      <h2 class={titleClasses} style="color: {colorTitle};">{@html title}</h2>
    </div>
  {/if}

  <!-- Основной контент списка -->
  <div class={`list-container ${classList}`}>
    {#if items && items.length > 0}
      <ul 
        class="styled-list" 
        style="list-style-type: {type[level]}; color: {color};"
      >
        {#each items as item, index (index)}
          {#if Array.isArray(item)}
            <svelte:self
              items={item}
              type={type}
              classList={classList}
              color={color}
              level={level + 1}/>
          {:else} 
            <li class="list-item">
              {@html item}
            </li>
          {/if}
        {/each}
      </ul>
    {:else}
      <p class="empty-list" style="color: {color};">Список пуст</p>
    {/if}
  </div>
</div>

<style>
  .list-wrapper {
    width: 100%;
  }

  .list-header {
    margin-bottom: 1rem;
  }

  .title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-title);
    color: var(--color-texts-main);
    font-weight: 500;
    margin: 0 0 0 0;
    gap: 5px;
  }

  /* Стили для списка */
  .styled-list {
    margin: 0;
    padding-left: 1.5rem;
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-description);
  }

  .list-item {
    margin: 0.5rem 0;
    line-height: 1.5;
  }

  .empty-list {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-description);
    font-style: italic;
    opacity: 0.7;
    margin: 0;
  }
</style>