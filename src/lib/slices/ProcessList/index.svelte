<script>
  /** @type {import("@prismicio/client").Content.ProcessSlice} */
  export let slice;

  console.log(slice)

  import ProcessCard from "$lib/components/ProcessCard.svelte";
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2 id="process"><a href="#process">Process</a></h2>

  <div class="process-cards">
    {#each slice.items as item}
    <ProcessCard {item} />
    {/each}
  </div>
</section>

<style>
  .process-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
    gap: var(--size-l);
    margin: 0 auto 8rem auto;
    max-width: 65rem;
    width: 100%;
    padding: 0 5vw;
  }

  @media (max-width: 900px) {
    .process-cards {
      grid-template-columns: repeat(2, minmax(12em, 1fr));
    }
  }
  @media (max-width: 600px) {
    .process-cards {
      display: flex;
      flex-direction: column;
    }
  }
</style>