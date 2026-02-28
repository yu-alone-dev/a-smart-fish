<script>
  import { goto } from '$app/navigation';
  
  export let title = '';
  export let href = '#';
  export let state = null;
  export let replaceState = false;
  export let url_parameter = null; // Новый проп для URL-параметров
  
  function handleClick(event) {
    event.preventDefault();
    
    // Формируем финальный URL с учетом параметров
    let finalHref = href;
    
    if (url_parameter) {
      // Если это объект с параметрами
      if (typeof url_parameter === 'object') {
        const params = new URLSearchParams();
        Object.entries(url_parameter).forEach(([key, value]) => {
          params.append(key, value);
        });
        
        // Добавляем параметры к URL
        const separator = href.includes('?') ? '&' : '?';
        finalHref = `${href}${separator}${params.toString()}`;
      } 
      // Если это строка, просто добавляем как есть
      else if (typeof url_parameter === 'string') {
        const separator = href.includes('?') ? '&' : '?';
        finalHref = `${href}${separator}${url_parameter}`;
      }
    }
    
    // Навигация с state (если есть) или без
    if (state) {
      goto(finalHref, {
        state: state,
        replaceState: replaceState,
      });
    } else {
      goto(finalHref);
    }
  }
</script>

<a 
  {href} 
  class="feature-card"
  on:click={handleClick}
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
    transition: opacity 0.2s;
    cursor: pointer;
  }

  .card-title {
    font-family: var(--font-family-main);
    font-size: var(--font-size-card-button);
    color: var(--color-texts-button);
    font-weight: 500;
    margin: 0;
  }

  .feature-card:hover {
    opacity: 0.85;
  }
</style>