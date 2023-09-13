<script>
  /** @type {import("@prismicio/client").Content.WelcomeSlice} */
  export let slice;

  import Project from "$lib/components/Project.svelte";
  let item = slice.primary
  let intro = true
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
<div class="content">
  <div class="intro">
    <div>
      <span>Available</span>
      <h1>{slice.primary.heading[0].text}</h1>
      <p>{slice.primary.text[0].text}</p>
    </div>
    <div class="welcome-buttons">
      <a class="action-btn" href="#">Reach out!</a>
      <a class="second-btn" href="#projects">Projects</a>
    </div>
  </div>
  <div class="project">
    <Project {item} {intro} />
  </div>
</div>


</section>

<style>
  section {
        position: relative;
        display: flex;
        gap: var(--size-l);
        flex-direction: column;
        align-items: center;
        margin: 6rem 0 2rem 0;
        height: max-content;
        min-height: 100dvh;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--size-m);
      width: 95%;
      max-width: 50rem;
      margin: 4rem 0 0 0;
    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 24rem;
    }

    .project {
      transform: none;
      max-width: 20rem;
    }

    .welcome-buttons {
      position: relative;
      transform: translateY(calc(-1*(var(--size-xs))));
        display: flex;
        flex-direction: row;
        gap: .5rem;
        
        font-size: 2rem;
    }

    .welcome-buttons a {
        font-size: 1rem;
    }
    
    @media (max-width: 620px) {
      section {
        height: max-content;
        margin-bottom: 6rem;
        margin-top: -1rem;
      }
		.content {
			flex-direction: column;
      gap: var(--size-xl);
		}
    .intro {
      gap: 2rem;
      width: 100%;
      max-width: 23rem;
      justify-content: unset;
    }
    .project {
      margin: .5rem;
      max-width: none;
    }
	}
</style>