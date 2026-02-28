<script>
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  
  export let title = '';
  export let href = '#';
  export let state = null;
  export let replaceState = false;
  export let url_parameter = null;
  export let useGoto = true; // Флаг для использования goto вместо прямых ссылок
  export let external = false; // Флаг для внешних ссылок
  
  function handleClick(event) {
    // Для внешних ссылок - обычное поведение
    if (external) {
      return;
    }
    
    event.preventDefault();
    
    // Формируем финальный URL с base путем
    let finalHref = href.startsWith('http') ? href : base + href;
    
    // Добавляем URL-параметры если есть
    if (url_parameter) {
      if (typeof url_parameter === 'object') {
        const params = new URLSearchParams();
        Object.entries(url_parameter).forEach(([key, value]) => {
          params.append(key, value);
        });
        
        const separator = finalHref.includes('?') ? '&' : '?';
        finalHref = `${finalHref}${separator}${params.toString()}`;
      } 
      else if (typeof url_parameter === 'string') {
        const separator = finalHref.includes('?') ? '&' : '?';
        finalHref = `${finalHref}${separator}${url_parameter}`;
      }
    }
    
    // Навигация
    if (useGoto) {
      if (state) {
        goto(finalHref, {
          state: state,
          replaceState: replaceState,
        });
      } else {
        goto(finalHref);
      }
    } else {
      // Если useGoto = false, используем обычный переход
      window.location.href = finalHref;
    }
  }
</script>

<a 
  href={href.startsWith('http') ? href : base + href}
  class="feature-card"
  on:click={handleClick}
  class:external={external}
>
  <h3 class="card-title center">{title}</h3>
</a>

<style>
  .feature-card {
    background-color: var(--color-background-button);
    padding: 1rem;
    border-radius: 4px;
    text-decoration: none;
    display: block;
    transition: all 0.2s ease;
    cursor: pointer;
    color: var(--color-texts-button);
  }

  .card-title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-button);
    color: inherit;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }

  .feature-card:hover {
    opacity: 0.85;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .feature-card:active {
    transform: translateY(0);
  }

  .external {
    /* Стили для внешних ссылок, если нужно */
  }
</style>