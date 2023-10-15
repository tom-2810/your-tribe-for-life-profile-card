<script>
  import Topic from "$lib/components/Topic.svelte";

  export let data;
</script>

<section>
  <h1>Blog topics</h1>
  <div class="topics">
    {#each data.topics as topic}
      <Topic {topic} />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    margin: var(--size-xl) auto;
    width: 89%;
    max-width: 59rem;
  }
</style>
