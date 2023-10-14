<script>
  import Navigation from "$lib/components/Navigation.svelte";
  import global from "../global.css";
</script>

<header>
  <Navigation />
</header>
<main>
  <slot />
</main>

<style>
  header {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #dfdfdf;
    background: rgba(255, 252, 246, 0.88);
    backdrop-filter: blur(5px);
    z-index: 2;
  }
</style>
