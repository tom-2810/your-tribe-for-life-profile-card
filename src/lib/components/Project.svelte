<script>
  export let item;
  export let intro = false;
</script>

<section class="project">
  <a href=/project{item.project.url}>
    <div class="item" class:orange-color={intro}>
      <div class="card" class:shift={intro}>
        <div class="heading">
          <h3>{item.project.data.title}</h3>
		  {#if item.project.data.status}
		  <div class="status">{item.project.data.status}</div>
		  {/if}
        </div>
        <div class="content">
          <img src={item.project.data.hero_image.url} alt="afbeelding" />
        </div>
      </div>
    </div>

    <div class:casestudy={intro}>link</div>
  </a>
</section>

<style>
  .project {
    aspect-ratio: 1/1;
    cursor: pointer;
  }
  .project * {
	transition: .3s;
  }
  .project:hover .card {
    transform: translateX(-6px) translateY(-6px);
  }

  .item,
  .card {
    border-radius: var(--radius-m);
  }
  .item {
    background-color: var(--c-global-text);
    height: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 2px solid var(--c-global-text);
    height: 100%;
  }
  .casestudy {
    display: none;
  }
  .shift {
    transform: translateX(-6px) translateY(-6px);
  }
  .orange-color {
    background-color: var(--c-contrast);
  }
  .heading {
	display: flex;
	align-items: center;
	justify-content: space-between;
    padding: 14px 14px 8px 14px;
    border-bottom: 1px solid var(--c-line);
  }
  .status {
	border: 1px solid var(--c-contrast);
	padding: var(--size-s);
	color: var(--c-contrast);
	border-radius: var(--radius-s);
  }
  .content {
    flex: 1;
    margin: 14px;
    border: 1px solid grey;
    border-radius: var(--radius-s);
    overflow: hidden;
  }
  .content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project:nth-child(1n) {
    grid-column: span 4;
  }

  .project:nth-child(2n) {
    grid-column: span 4;
    transform: translateX(1rem) translateY(7rem);
  }

  .project:nth-child(3n) {
    grid-column: span 5;
    transform: translateX(3rem);
  }

  .project:nth-child(4n) {
    grid-column: span 4;
    transform: translateX(-1rem) translateY(3rem);
  }

  .project:nth-child(5n) {
    grid-column: span 4;
    transform: translateY(-6rem);
  }

  @media (max-width: 580px) {
    .project {
      transform: translateX(0) translateY(0) !important;
    }
  }
</style>
