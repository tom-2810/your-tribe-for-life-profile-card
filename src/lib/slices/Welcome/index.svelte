<script>
  /** @type {import("@prismicio/client").Content.WelcomeSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h1>{slice.primary.heading[0].text}</h1>
  <p>{slice.primary.text[0].text}</p>

  <div class="welcome-buttons">
    <a class="action-btn" href="#contact">Reach out!</a>
    <a class="second-btn" href="#projects">Explore projects</a>
  </div>
</section>

<style>
  section {
        position: relative;
        display: flex;
        gap: var(--size-l);
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 8rem;
        height: 95dvh;
        max-height: 55rem;
        width: 100%;
        max-width: 55rem;
        margin: 0 auto;
    }

    .welcome-buttons {
        display: flex;
        flex-direction: column;
        gap: .7rem;
        margin-top: auto;
        
        font-size: 2rem;
    }

    .welcome-buttons a {
        padding: var(--size-m) var(--size-xl);
        height: 2.1rem;
    }
</style>