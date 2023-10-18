<script>
  /** @type {import("@prismicio/client").Content.TextSectionSlice} */
  export let slice;
</script>

<section
  class="text-section"
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2>{slice.primary.title}</h2>
  <div>
    <section class="content">
      <section class="start-text">
        {@html slice.primary.starttext[0].text}
      </section>
    </section>

    <div class="image">
      <img src={slice.primary.image.url} alt="" />
    </div>

    <section class="content">
      <section class="start-text">
        {@html slice.primary.endtext[0].text}
      </section>
    </section>
  </div>
</section>

<style>
  .text-section {
  }
  .text-section div {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    /* gap: 20rem; */
  }
  .text-section section {
    border-radius: var(--radius-m);
    display: flex;
    flex-direction: column;
    gap: var(--size-l);
    background-color: var(--c-contrast-background);
    padding: var(--size-l);
    width: 78%;
  }

  .text-section div > section:first-of-type {
    padding-bottom: 7rem;
  }

  .text-section div > section:last-of-type {
    padding-top: 7rem;
  }

  .text-section div :is(.image, img) {
    border-radius: var(--radius-xl);
  }
  .text-section div .image {
    position: relative;
    margin: -4rem 0;
    margin-left: auto;
    width: 80%;
    background-color: var(--c-global-text);
    z-index: 1;
  }
  .text-section div .image img {
    position: relative;
    transform: translateX(-6px) translateY(-6px);
    border: 4px solid var(--c-global-text);
  }
  .text-section section > * {
    width: 100%;
  }
  @media (max-width: 980px) {
    .text-section div {
      width: 95%;
    }
  }
  @media (max-width: 750px) {
    .text-section div {
      width: 100%;
    }
    .text-section section {
      padding: var(--size-s);
      width: 90%;
    }
    .text-section div .image {
      margin-left: 7%;
    }
  }
  @media (max-width: 605px) {
    .text-section section {
      width: 100%;
    }
  }
</style>
