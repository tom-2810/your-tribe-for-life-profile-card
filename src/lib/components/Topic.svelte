<script>
  import * as prismic from "@prismicio/client";
  export let topic;

  let date = topic.last_publication_date.split("-");

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

  let fullMonth = monthNames[month];
</script>

<section class="topic">
  <a href="/blog-topics/{topic.uid}">
    <div class="item">
      <div class="card">
        <img loading="lazy" class="mobile" src={topic.data.emoji.url} alt="" />
        <div class="text">
          <h3>{topic.data.title}</h3>

          <h4>{topic.data.sub_title}</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nam
            voluptatum ea. Tempore, quo. Quibusdam, voluptatibus. Eveniet, rem
            minima. Quam similique officia facilis totam atque minima, odio enim
            pariatur dicta!
          </p>
          <p class="date">{day} {fullMonth}, {year}</p>
        </div>
        <img loading="lazy" src={topic.data.emoji.url} alt="" />
      </div>
    </div>

    <div class="read-more">
      Read topic
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
  .topic {
    width: 100%;
    max-height: 22rem;
  }
  .topic * {
    transition: 0.3s;
  }
  .topic:hover .card {
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
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 3px solid var(--c-global-text);
    height: 100%;
    width: 100%;
    padding: var(--size-m);
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 55%;
  }
  h3 {
    font-size: var(--size-xl);
    text-wrap: balance;
    margin-bottom: 3.3rem;
  }
  p {
    font-size: initial;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  p.date {
    margin-top: var(--size-m);
  }
  img {
    margin-left: auto;
  }
  img.mobile {
    position: absolute;
    right: -1.5rem;
    top: -2rem;
    display: none;
    height: 4rem;
    margin-left: 0;
    margin-right: auto;
  }
  .read-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--c-contrast);
    margin-top: 0.3rem;
  }
  svg {
    width: 20px;
    height: 20px;
    overflow: visible;
  }
  .topic:hover svg {
    width: 2rem;
  }

  @media (max-width: 980px) {
    h3 {
      font-size: 3.1rem;
    }
  }

  @media (max-width: 660px) {
    h3 {
      font-size: 2.8rem;
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
    p {
      -webkit-line-clamp: 2;
    }
  }
</style>
