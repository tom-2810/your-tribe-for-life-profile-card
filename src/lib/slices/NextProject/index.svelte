<script>
  /** @type {import("@prismicio/client").Content.NextProjectSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <span>Read next project</span>
  <a href="/projects/{slice.primary.project.uid}">
    <div>
      <p>{slice.primary.project.data.title}</p>
      <img class="arrow" src="../arrow.svg" alt="" />
      <img
        class="project"
        src={slice.primary.project.data.hero_image.url}
        alt=""
      />
    </div>
  </a>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 19rem;
    margin-top: var(--size-xxl);
    overflow: hidden;
  }
  p {
    font-size: 2.2rem;
    font-family: 'Fugaz One', cursive;
    font-weight: 50;
  }
  a:hover {
    text-decoration: underline;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-s);
  }
  span {
    color: var(--c-contrast);
  }

  img.arrow {
    width: 1.5rem;
    margin-bottom: 1rem;
    transition: .2s;
  }
  .project {
    width: 60%;
    max-width: 60rem;
    border: 3px solid var(--c-global-text);
    border-bottom: none;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
    transition: 0.2s;
    cursor: pointer;
  }
  a:hover .project {
    transform: translateY(-0.6rem);
    scale: 1.008;
  }
  a:hover img.arrow {
    transform: translateY(.3rem);
    scale: .85;
  }
  @media (max-width: 600px) {
    .project {
      width: 80%;
    }
  }
</style>
