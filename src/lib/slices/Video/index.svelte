<script>
  /** @type {import("@prismicio/client").Content.VideoSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <video controls loop muted src={slice.primary.test.url} />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    width: 93%;
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 var(--size-xl);
  }
  video {
    width: 100%;
    border: 3px solid var(--c-global-text);
    border-radius: var(--radius-m);
    margin: var(--size-xl) var(--size-xl) 0 var(--size-xl);
  }
  @media (max-width: 980px) {
    video {
      width: 100%;
    }
  }
  @media (max-width: 750px) {
    section {
      width: 100%;
      max-width: none;
    }
  }
  @media (max-width: 605px) {
    section {
      padding: var(--size-l);
    }
  }
</style>
