<script>
  /** @type {import("@prismicio/client").Content.NextTopicSlice} */
  import Topic from "$lib/components/Topic.svelte";
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <span>Next blog topic</span>
  <Topic topic={slice.primary.topic} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-l);
    margin: 4rem auto;
    width: 89%;
    max-width: 59rem;
  }
  span {
    font-size: 1.5rem;
  }
</style>
