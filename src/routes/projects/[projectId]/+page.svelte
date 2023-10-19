<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

  export let data;
</script>

<SliceZone slices={data.data.slices} {components} />

<div class="next">
  <span>Read next project</span>
  <a href="/projects/{data.next_project.uid}">
    <div>
      <p>{data.next_project.data.title}</p>
      <img class="arrow" src="../arrow.svg" alt="" />
      <img class="project" src={data.next_project.data.hero_image.url} alt="" />
    </div>
  </a>
</div>

<style>
  .next {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--size-xxl);
    padding: 0 1dvw;
    max-height: 20rem;
    overflow: hidden;
  }
  p {
    font-size: 2.2rem;
    font-family: "Fugaz One", cursive;
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
    transition: 0.2s;
  }
  .project {
    object-position: top;
    object-fit: cover;
    border: 3px solid var(--c-global-text);
    border-bottom: none;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
    max-width: 100%;
    width: 30rem;
    transition: 0.2s;
    cursor: pointer;
  }
  a:hover .project {
    transform: translateY(-0.5rem);
    scale: 1.01;
  }
  a:hover img.arrow {
    transform: translateY(0.3rem);
    scale: 0.85;
  }
  @media (max-width: 20rem) {
    .next {
      max-height: 14rem;
    }
  }
</style>
