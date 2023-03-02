<script lang="ts">
	import type { ResearchContent } from '$lib/server/newt';

	export let data: {
		contents: ResearchContent[];
	};
</script>

<div class="layout">
	<main>
		<slot />
	</main>

	<nav>
		<ul>
			<li><a href="/">Top</a></li>
			{#each data.contents as content}
				<li><a href="/date-library/{content.slug}">{content.name}</a></li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr 16rem;
		}
	}
</style>
