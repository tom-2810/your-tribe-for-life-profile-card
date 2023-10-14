<script>
  /** @type {import("@prismicio/client").Content.WelcomeSlice} */
  export let slice;

  import Project from "$lib/components/Project.svelte";
  let item = slice.primary;
  let intro = true;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <div class="availability">
    <h1><span>👋</span>{slice.primary.heading[0].text}</h1>
    <p>
      I am currently
      {#if slice.primary.availability == "available"}
        <span style="color: #0bb70b;">{slice.primary.availability}</span>
      {:else}
        <span style="color: #dc1414;">{slice.primary.availability}</span>
      {/if}
      for hire.
    </p>
  </div>
  <h2 class="bold-text">
    Frontend Design & Development <span>Student</span><img
      src="../rocket_1f680.png"
      alt=""
    />
  </h2>
  <div class="paragraph">
    <p>
      {slice.primary.text[0].text}
    </p>
    <div class="welcome-buttons">
      <a class="action-btn" href="/contact">Reach out!</a>
      <a class="second-btn" href="/projects"
        >see projects
        <svg>
          <defs>
            <marker
              id="m"
              markerWidth="4"
              markerHeight="5"
              refX="0"
              refY="1"
              viewBox="0 0 1 2"
            >
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
      </a>
    </div>
  </div>

  <a class="project" href="/projects{item.project.url}">
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

    <div class="read-more" class:casestudy={intro}>
      Read case study
      <svg>
        <defs>
          <marker
            id="m"
            markerWidth="4"
            markerHeight="5"
            refX="0"
            refY="1"
            viewBox="0 0 1 2"
          >
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
  .project:hover svg,
  .second-btn:hover svg {
    width: 2rem;
  }
  .read-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--c-contrast);
    margin-top: 0.3rem;
  }
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-template-areas:
      "availability bold-text"
      "project paragraph";
    width: 95%;
    max-width: 71rem;
    height: max-content;
    row-gap: var(--size-l);
    margin: 7rem auto;
  }
  h1 {
    all: unset;
  }
  h2 {
    all: unset;
    font-family: "Fugaz One", cursive;
  }
  h2::before {
    display: none;
  }
  .availability {
    grid-area: availability;
    margin-top: auto;
    font-size: 2rem;
    width: 93%;
  }

  .availability span {
    color: green;
  }

  .project {
    cursor: pointer;
    grid-area: project;
    width: 93%;
    max-width: 25rem;
    aspect-ratio: 1/1;
  }
  .project * {
    transition: 0.3s;
  }
  .card {
    transform: translateX(-6px) translateY(-6px);
  }
  .item,
  .card {
    border-radius: var(--radius-m);
  }
  .item {
    background-color: var(--c-contrast);
    width: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 3px solid var(--c-global-text);
    height: 100%;
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
  .bold-text {
    position: relative;
    grid-area: bold-text;
    font-size: 64px;
    font-weight: 400;
    line-height: 102.3%;
    letter-spacing: 0.03rem;
    margin-top: auto;
  }
  .bold-text span {
    color: var(--c-contrast);
  }
  .bold-text img {
    position: absolute;
    transform: translateY(-1.5rem);
    height: 7.3rem;
    width: 7.3rem;
  }
  .paragraph {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    grid-area: paragraph;
  }
  .welcome-buttons {
    position: relative;
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 750px) {
    section {
      display: flex;
      flex-direction: column;
    }
    .availability {
      margin-bottom: var(--size-l);
    }
    .project {
      max-width: none;
      width: 100%;
    }
    .bold-text {
      width: 78%;
      font-size: 3rem;
      margin-bottom: 1.4rem;
    }
    .bold-text img {
      transform: translateX(-0.4rem) translateY(-1rem);
      height: 7rem;
      width: 7rem;
    }
    .paragraph {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 500px) {
    .bold-text {
      width: 100%;
      max-width: 20rem;
      font-size: 2.3rem;
    }
    .bold-text img {
      transform: translateX(4.4rem) translateY(-2.9rem);
      height: 7rem;
      width: 7rem;
    }
  }
</style>
