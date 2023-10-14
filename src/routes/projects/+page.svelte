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
  .projects {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: var(--size-xl);
    row-gap: var(--size-xxl);

    margin: 0 auto 4rem auto;
    width: 100%;
    max-width: 61rem;
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
