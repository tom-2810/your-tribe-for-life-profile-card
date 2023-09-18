<script>
    export let item;

    console.log(item)
</script>

<section>
  <div class="item" style=background-color:{item.process.data.color}>
    <div class="card">
      <div class="heading" style=color:{item.process.data.color}>
        <h3>{item.process.data.title}</h3>
      </div>
      <div class="content">
        <img src={item.process.data.image.url} alt="">
        <p>{item.process.data.text}</p>
      </div>
    </div>
  </div>
</section>

<style>
    section {
        aspect-ratio: 1/1;
    }

    section .card {
    transform: translateX(-6px) translateY(-6px);
  }
    .item,
  .card {
    border-radius: var(--radius-m);
  }
  .item {
    height: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 2px solid var(--c-global-text);
    height: 100%;
  }
  .heading {
	display: flex;
	align-items: center;
	justify-content: space-between;
    padding: 14px 14px 8px 14px;
    border-bottom: 1px solid var(--c-line);
  }
  .heading h3 {
    margin: 0 auto;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin: 14px;
    border-radius: var(--radius-s);
    overflow: hidden;
  }

  .content img {
    height: 7rem;
    object-fit: contain;
  }

  .content p {
    text-align: center;
  }

  @media (max-width: 600px) {
    section {
      height: 25rem;
    }
  }
</style>
