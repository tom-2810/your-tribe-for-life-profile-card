<script>
  /** @type {import("@prismicio/client").Content.ProjectListSlice} */
  export let slice;

  console.log(slice.items[0]);
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  {#each slice.items as item}
  <a href=/project{item.project.url}>
    <h3>{item.project.data.title}</h3>
    <img src={item.project.data.hero_image.url} alt="" />
  </a>
  {/each}
</section>

<style>
  img {
    width: 23rem;
  }
</style>