<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  import { slide, fade, fly } from "svelte/transition";
  import Topic from "$lib/components/topic.svelte";

  export let data;

  let date = data.last_publication_date.split("-");

  let year = date[0];
  let month = date[1];
  let day = date[2].slice(0, 2);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let fullMonth = monthNames[month - 1];
</script>

<div class="content" in:fade={{ delay: 500, duration: 500 }}>
  <div
    class="hero"
    style="background: linear-gradient(0deg, #fffcf6 16%, {data.data
      .color} 0%);"
  >
    <section class="card" in:slide={{ delay: 500, duration: 500, y: 600 }}>
      <img
        loading="eager"
        in:fade={{ delay: 1000, duration: 800 }}
        class="mobile"
        src={data.data.emoji.url}
        alt=""
      />
      <div class="text">
        <h1>{data.data.title}</h1>

        <h2>{data.data.sub_title}</h2>

        <p>
          {data.data.intro}
        </p>
        <p class="date">{day} {fullMonth}, {year}</p>
      </div>
      <img loading="eager" src={data.data.emoji.url} alt="" />
    </section>
  </div>
  <article in:fly={{ delay: 1000, duration: 800, y: 100 }}>
    <SliceZone slices={data.data.slices} {components} />
  </article>

  <div class="next">
    <span>Next blog topic</span>
    <Topic topic={data.next_topic} />
  </div>
</div>

<style>
  .next {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-l);
    margin: 4rem auto;
    width: 89%;
    max-width: 59rem;
  }
  span {
    font-size: 1.5rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: var(--size-xxl);
  }
  .hero {
    width: 100%;
    padding-top: 14rem;
  }
  section {
    position: absolute;
    width: 93%;
    max-width: 75rem;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
  }
  .card {
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: var(--c-global-background);
    width: 93%;
    max-width: 75rem;
    padding: var(--size-xl);
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  h1 {
    font-size: 5rem;
    text-wrap: balance;
    margin-bottom: 5rem;
  }
  p.date {
    margin-top: var(--size-s);
    font-size: 0.8rem;
    color: var(--c-second-text);
  }
  img {
    margin: 0 0 auto auto;
    height: 15rem;
  }
  img.mobile {
    position: absolute;
    display: none;
    margin-left: 0;
    margin-right: auto;
    right: -1.5rem;
    top: -2rem;
    height: 5rem;
  }
  h2 {
    all: unset;
    font-family: "Fugaz One", cursive;
    font-size: 1.6rem;
  }
  h2::before {
    display: none;
  }
  @media (max-width: 980px) {
    img {
      display: none;
    }
    img.mobile {
      display: block;
      right: -1.5rem;
      top: -2rem;
      height: 5rem;
    }
    .text {
      width: 100%;
    }
  }
  @media (max-width: 750px) {
    .hero {
      padding-top: 12rem;
    }
    .card {
      padding: var(--size-l);
    }
    img {
      display: none;
    }
    img.mobile {
      display: block;
      right: -0.8rem;
      top: -1.3rem;
      height: 3rem;
    }
    .text {
      width: 100%;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 605px) {
  }
</style>
