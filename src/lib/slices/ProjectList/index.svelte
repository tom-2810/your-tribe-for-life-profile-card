<script>
  /** @type {import("@prismicio/client").Content.ProjectListSlice} */
  export let slice;

  import Project from "$lib/components/Project.svelte";
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2 id="projects"><a href="#projects">Projects</a></h2>

  <div class="projects">
    {#each slice.items as project}
      <Project project={project.project} />
    {/each}
  </div>

  <div class="more">
    <a class="action-btn" href="/projects">All projects</a>
  </div>
</section>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: var(--size-xl);
    row-gap: var(--size-xxl);

    margin: 0 auto 4rem auto;
    width: 100%;
    max-width: 57rem;
    padding: 0 5vw;
  }

  .more {
    display: flex;
    justify-content: space-around;

    font-family: "Fugaz One", cursive;
  }

  @media (max-width: 580px) {
    .projects {
      display: flex;
      flex-direction: column;
      gap: var(--size-xl);
    }
  }
</style>
