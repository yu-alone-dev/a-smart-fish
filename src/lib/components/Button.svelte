<script>
  export let title = '';
  export let href = '#';
</script>

<a {href} class="feature-card">
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