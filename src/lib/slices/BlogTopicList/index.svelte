<script>
  /** @type {import("@prismicio/client").Content.BlogTopicListSlice} */
  export let slice;

  import Topic from "$lib/components/Topic.svelte";
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2 id="topics"><a href="#topics">Blog topics</a></h2>

  <div class="topics">
    {#each slice.items as item}
      <Topic topic={item.topic} />
    {/each}
  </div>

  <div class="more">
    <a class="action-btn" href="/blog-topics">All topics</a>
  </div>
</section>

<style>
  section {
    margin: var(--size-xxl) 0;
  }
  .topics {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    margin: 4rem auto;
    width: 89%;
    max-width: 59rem;
  }

  .more {
    display: flex;
    justify-content: space-around;

    font-family: "Fugaz One", cursive;
  }
</style>
