<script>
  import Project from "$lib/components/Project.svelte";
  export let data;
</script>

<section>
  <h1>Projects</h1>
  <div class="projects">
    {#each data.projects as project}
      <Project {project} />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-l);
    margin: var(--size-xl) 0;
  }
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

  @media (max-width: 580px) {
    .projects {
      display: flex;
      flex-direction: column;
      gap: var(--size-xl);
    }
  }
</style>
