<script>
  /** @type {import("@prismicio/client").Content.BlogTopicListSlice} */
  export let slice;

  import Topic from "$lib/components/Topic.svelte";
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  {#each slice.items as item}
    <Topic topic={item.topic} />
  {/each}
</section>
