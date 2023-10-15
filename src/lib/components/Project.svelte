<script>
  export let project;
  export let intro = false;
</script>

<section class="project">
  <a href=/projects{project.url}>
    <div class="item" class:orange-color={intro}>
      <div class="card" class:shift={intro}>
        <div class="heading">
          <h3>{project.data.title}</h3>
		  {#if project.data.status}
		  <div class="status">{project.data.status}</div>
		  {/if}
        </div>
        <div class="content">
          <img loading="lazy" src={project.data.hero_image.url} alt="afbeelding" />
        </div>
      </div>
    </div>

    <div class="read-more" class:casestudy={intro}>
      Read case study
			<svg>
				<defs>
					<marker id="m" markerWidth="4" markerHeight="5" refX="0" refY="1" viewBox="0 0 1 2">
						<polygon points="0,0 1,1 0,2" fill="#ff9900" />
					</marker>
				</defs>
				<line
					x1="0"
					y1="50%"
					x2="100%"
					y2="50%"
					stroke-width="1.5"
					marker-end="url(#m)"
					stroke="#ff9900"
				/>
			</svg>
    </div>
  </a>
</section>

<style>
  svg {
		width: 20px;
		height: 20px;
		overflow: visible;
	}
  .project:hover svg {
		width: 2rem;
	}
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
    border: 3px solid var(--c-global-text);
    height: 100%;
  }
  .read-more {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--c-contrast);
    margin-top: .3rem;
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
    grid-column: span 3;
  }

  .project:nth-child(2n) {
    grid-column: span 3;
    transform: translateX(1rem) translateY(7rem);
  }

  .project:nth-child(3n) {
    grid-column: span 4;
    transform: translateX(3rem);
  }

  .project:nth-child(4n) {
    grid-column: span 4;
    transform: translateX(-1rem) translateY(3rem);
  }

  .project:nth-child(5n) {
    grid-column: span 3;
    transform: translateY(-6rem);
  }

  @media (max-width: 580px) {
    .project {
      transform: translateX(0) translateY(0) !important;
    }
  }
</style>
