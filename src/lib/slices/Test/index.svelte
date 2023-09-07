<script>
  /** @type {import("@prismicio/client").Content.TestSlice} */
  export let slice;

  console.log(slice.primary.image)
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  Placeholder component for {slice.slice_type} (variation: {slice.variation})
  Slices

  <img src="{slice.primary.image.url}" alt="">
</section>

<style>
  img {
    width: 100%;
  }
</style>