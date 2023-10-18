<script>
  /** @type {import("@prismicio/client").Content.QuoteBlockSlice} */
  export let slice;

  console.log(slice);
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <blockquote>
    <q>
      {slice.primary.text}
    </q>
    <cite>&mdash; {slice.primary.auteur}</cite>
  </blockquote>
</section>

<style>
  blockquote {
    display: flex;
    flex-direction: column;
    gap: var(--size-m);
    width: 65%;
    max-width: 55rem;
    margin: 0 auto;
    background-color: var(--c-contrast-background);
    padding: var(--size-xl);
    border-radius: var(--radius-m);
    font-size: 1.3rem;
  }

  @media (max-width: 980px) {
    blockquote {
      width: 80%;
    }
  }

  @media (max-width: 660px) {
    blockquote {
      width: 100%;
      max-width: none;
      padding: var(--size-l);
    }
  }
</style>