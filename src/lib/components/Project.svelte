<script>
    export let item;
</script>

<section class="project">
	<a href="/project{item.project.url}">
		<h3>{item.project.data.title}</h3>
		<img src={item.project.data.hero_image.url} alt="" />

		<p class="case-study">
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
		</p>
	</a>
</section>

<style>
	svg {
		width: 20px;
		height: 20px;
		overflow: visible;
	}

	.project {
		position: relative;
		transition: .7s;
	}

	.project:nth-child(1n) {
		grid-column: span 5;
	}
	
	.project:nth-child(2n) {
		grid-column: span 4;
		transform: translateY(13rem);
	}

	.project:nth-child(3n) {
		grid-column: span 7;
		transform: translateX(6rem) translateY(1rem);
	}

	.project:nth-child(4n) {
		grid-column: span 4;
		transform: translateY(8rem);
	}

	.project:nth-child(5n) {
		grid-column: span 5;
		transform: translateY(-4rem);
	}

	.project:hover svg {
		width: 3rem;
	}

	.project * {
		transition: 0.5s;
	}

	.project .case-study {
		display: flex;
		gap: var(--size-s);
		font-size: 1.1rem;
		font-weight: lighter;
		color: #ff9900;
	}

	.project:hover {
		scale: 1.08;
	}

	.project:hover :is(img, .summary) {
		border-radius: var(--radius-s);
		color: var(--c-global-text);
	}

	.project img {
		width: 100%;
		aspect-ratio: 2/1.5;
		object-fit: cover;
		/* margin: .2rem 0; */

		border-radius: var(--radius-xl);
	}

	@media (max-width: 580px) {
		.project {
			transform: translateX(0) translateY(0) !important;
		}
	}
</style>
