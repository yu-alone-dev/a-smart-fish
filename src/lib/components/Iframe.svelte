<script>
  import { base } from '$app/paths';
  import { onMount, afterUpdate } from 'svelte';
  
  export let src = '';
  export let title = '';
  export let test_num = null;
  export let minHeight = 200;
  export let maxHeight = null;
  export let pollingInterval = 200; // мс для polling метода
  
  let iframe;
  let iframeHeight = minHeight + 'px';
  let contentHeight = minHeight;
  let pollingTimer;
  
  $: iframeSrc = test_num 
    ? `${base}/pages/tests/test_${test_num}.html`
    : src.startsWith('http') ? src : `${base}${src}`;
  
  // Метод 1: Получение высоты через postMessage
  function handleMessage(event) {
    if (event.data && event.data.type === 'iframe-height') {
      const newHeight = parseInt(event.data.height);
      if (newHeight && newHeight > minHeight) {
        contentHeight = newHeight;
        updateHeight();
      }
    }
  }
  
  // Метод 2: Прямой доступ к iframe (если same-origin)
  function getIframeHeight() {
    try {
      if (!iframe || !iframe.contentDocument) return;
      
      const iframeDoc = iframe.contentDocument;
      const newHeight = Math.max(
        iframeDoc.documentElement.scrollHeight,
        iframeDoc.body.scrollHeight
      );
      
      if (newHeight && newHeight > minHeight && newHeight !== contentHeight) {
        contentHeight = newHeight;
        updateHeight();
      }
    } catch (e) {
      // CORS ошибка - игнорируем
    }
  }
  
  // Метод 3: Polling для динамического контента
  function startPolling() {
    stopPolling();
    
    pollingTimer = setInterval(() => {
      getIframeHeight();
    }, pollingInterval);
  }
  
  function stopPolling() {
    if (pollingTimer) {
      clearInterval(pollingTimer);
      pollingTimer = null;
    }
  }
  
  function updateHeight() {
    if (maxHeight) {
      iframeHeight = Math.min(contentHeight, maxHeight) + 'px';
    } else {
      iframeHeight = contentHeight + 'px';
    }
  }
  
  function handleIframeLoad() {
    // Пробуем получить высоту напрямую
    getIframeHeight();
    
    // Начинаем polling для динамического контента
    startPolling();
    
    // Отправляем запрос на получение высоты
    try {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'get-iframe-height' }, '*');
      }
    } catch (e) {}
  }
  
  onMount(() => {
    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      stopPolling();
    };
  });
  
  // Обновляем высоту при изменении контента
  afterUpdate(() => {
    getIframeHeight();
  });
</script>

<iframe
    bind:this={iframe}
    src={iframeSrc}
    {title}
    width="100%"
    style="
        height: {iframeHeight};
        min-height: {minHeight}px;
        transition: height 0.2s ease;
        border: none;
    "
    frameborder="0"
    scrolling="no"
    on:load={handleIframeLoad}
    on:error={(e) => console.error('Iframe error:', e)}
></iframe>

<!-- Добавляем скрипт для внедрения в iframe -->
<svelte:head>
  <script>
    // Этот код будет выполняться, если iframe загружается с тем же origin
    if (window.self !== window.top) {
      function sendCurrentHeight() {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'iframe-height', height }, '*');
      }
      
      window.addEventListener('load', sendCurrentHeight);
      window.addEventListener('resize', sendCurrentHeight);
      
      const observer = new MutationObserver(sendCurrentHeight);
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true 
      });
      
      // Слушаем запросы от родителя
      window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'get-iframe-height') {
          sendCurrentHeight();
        }
      });
      
      sendCurrentHeight();
    }
  </script>
</svelte:head>

<style>
  iframe {
    display: block;
    width: 100%;
    background: transparent;
  }
</style>