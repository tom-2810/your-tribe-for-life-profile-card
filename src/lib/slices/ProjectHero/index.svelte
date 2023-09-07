<script>
  /** @type {import("@prismicio/client").Content.ProjectHeroSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h1>{slice.primary.heading[0].text}</h1>
  <img src={slice.primary.hero_image.url} alt="">
</section>

<style>
  section {
		display: flex;
		gap: var(--size-l);
		flex-direction: column;
		align-items: center;
		margin: 7rem auto var(--size-xxl) auto;
		width: 100%;
		max-width: 59rem;
		text-align: center;
	}

	h1 {
		position: relative;
		height: 3rem;
		z-index: -1;
	}

	section > img {
		width: 90%;
		max-width: 42rem;
    height: 26rem;
		border-radius: var(--radius-l);
		object-fit: cover;
	}
</style>