<script>
  export let items = [];                    // массив элементов
  export let type = 'disc';             // тип маркера: disc, circle, square, decimal
  export let classList = 'left';                // дополнительные классы для списка
  export let color = 'var(--color-texts-main)'; // цвет текста
</script>

<div class={`list-container ${classList}`} >
  {#if items && items.length > 0}
    <ul 
      class={`styled-list`} 
      style="list-style-type: {type}; color: {color};"
    >
      {#each items as item, index (index)}
        <li class={`list-item`}>
          {@html item}
        </li>
      {/each}
    </ul>
  {:else}
    <p class="empty-list" style="color: {color};">Список пуст</p>
  {/if}
</div>

<style>
  .styled-list {
    margin: 1rem 0;
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
    margin: 1rem 0;
  }
</style>