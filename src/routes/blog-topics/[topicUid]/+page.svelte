<script>
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

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

<div
  class="hero"
  style="background: linear-gradient(0deg, #ffffff 14%, {data.data.color} 0%);"
>
  <section class="card">
    <img loading="lazy" class="mobile" src={data.data.emoji.url} alt="" />
    <div class="text">
      <h1>{data.data.title}</h1>

      <h2>{data.data.sub_title}</h2>

      <p>
        {data.data.intro}
      </p>
      <p class="date">{day} {fullMonth}, {year}</p>
    </div>
    <img loading="lazy" src={data.data.emoji.url} alt="" />
  </section>
</div>
<article>
  <SliceZone slices={data.data.slices} {components} />
</article>

<style>
  article {
    background-color: white;
  }
  .hero {
    width: 100%;
    padding-top: 20rem;
  }
  section {
    position: absolute;
    width: 93%;
    max-width: 75rem;
    background-color: white;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
  }
  .card {
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: white;
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
    margin-bottom: 7rem;
  }
  p.date {
    margin-top: var(--size-s);
    font-size: 0.8rem;
  }
  img {
    margin: 0 0 auto auto;
    width: 15rem;
  }
  img.mobile {
    display: none;
    position: absolute;
    right: -6.5rem;
    top: -2rem;
    height: 4rem;
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
