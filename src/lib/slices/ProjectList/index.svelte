<script>
  /** @type {import("@prismicio/client").Content.ProjectListSlice} */
  export let slice;

  import Project from "$lib/components/Project.svelte";

	let currentAmountOfProjects = 3;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2 id="projects"><a href="#projects">Projects</a></h2>

  <div class="projects">
    {#each slice.items.slice(0, currentAmountOfProjects) as item}
      <Project {item} />
    {/each}
  </div>

  <div class="more">
    {#if currentAmountOfProjects < slice.items.length}
      <button
        class="action-btn"
        on:click={() => (currentAmountOfProjects = currentAmountOfProjects + 3)}
      >
        Show more 
        {#if slice.items.length - currentAmountOfProjects > 3}
          +{3}
        {:else}
          +{slice.items.length - currentAmountOfProjects}
        {/if}
      </button>
    {/if}
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
    max-width: 53rem;
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
