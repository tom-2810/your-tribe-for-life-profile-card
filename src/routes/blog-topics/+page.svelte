<script>
  import Topic from '$lib/components/Topic.svelte';

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