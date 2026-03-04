<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  export let src = '';
  export let title = '';
  export let test_num = null;
  export let minHeight = 200;
  export let maxHeight = null;
  
  let iframe;
  let iframeHeight = minHeight + 'px';
  let error = false;
  
  // Правильное формирование пути
  $: iframeSrc = (() => {
    if (test_num) {
      // Убеждаемся, что путь правильный
      return `${base}/pages/tests/test_${test_num}.html`;
    }
    if (src) {
      return src.startsWith('http') ? src : `${base}${src}`;
    }
    return '';
  })();
  
  function handleMessage(event) {
    if (event.data?.type === 'iframe-height') {
      const newHeight = parseInt(event.data.height);
      if (newHeight > 0) {
        updateHeight(newHeight);
      }
    }
  }
  
  function updateHeight(newHeight) {
    let height = newHeight;
    if (height < minHeight) height = minHeight;
    if (maxHeight && height > maxHeight) height = maxHeight;
    
    if (iframeHeight !== height + 'px') {
      iframeHeight = height + 'px';
    }
  }
  
  function handleIframeLoad() {
    console.log('Iframe loaded successfully');
    error = false;
    
    // Запрашиваем высоту несколько раз
    requestHeight();
    setTimeout(requestHeight, 100);
    setTimeout(requestHeight, 300);
    setTimeout(requestHeight, 500);
  }
  
  function handleIframeError() {
    console.error('Iframe failed to load:', iframeSrc);
    error = true;
  }
  
  function requestHeight() {
    if (!iframe?.contentWindow) return;
    try {
      iframe.contentWindow.postMessage({ type: 'get-height' }, '*');
    } catch (e) {}
  }
  
  onMount(() => {
    window.addEventListener('message', handleMessage);
    
    const interval = setInterval(requestHeight, 1000);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(interval);
    };
  });
</script>

{#if error}
  <div style="
    padding: 2rem;
    background: #fff3f3;
    border: 1px solid #ffcdd2;
    border-radius: 8px;
    color: #b71c1c;
    text-align: center;
    min-height: {minHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <div>
      <strong>Ошибка загрузки:</strong> Файл не найден<br>
      <small style="opacity: 0.7;">{iframeSrc}</small>
    </div>
  </div>
{:else}
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
      display: block;
    "
    on:load={handleIframeLoad}
    on:error={handleIframeError}
  ></iframe>
{/if}

<!-- Упрощенный скрипт для iframe -->
<svelte:head>
  <script>
    if (window.self !== window.top) {
      console.log('Iframe script started');
      
      function getHeight() {
        const body = document.body;
        const html = document.documentElement;
        return Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.scrollHeight,
          html.offsetHeight
        );
      }
      
      function sendHeight() {
        const height = getHeight();
        window.parent.postMessage({ 
          type: 'iframe-height', 
          height: height 
        }, '*');
      }
      
      // Отправляем при загрузке
      if (document.readyState === 'complete') {
        sendHeight();
      } else {
        window.addEventListener('load', sendHeight);
      }
      
      // Отправляем при изменениях
      window.addEventListener('resize', sendHeight);
      
      const observer = new MutationObserver(sendHeight);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
      
      // Слушаем запросы
      window.addEventListener('message', (event) => {
        if (event.data?.type === 'get-height') {
          sendHeight();
        }
      });
      
      // Отправляем несколько раз для надежности
      setTimeout(sendHeight, 100);
      setTimeout(sendHeight, 500);
      setTimeout(sendHeight, 1000);
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