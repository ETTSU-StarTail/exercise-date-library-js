import { error } from '@sveltejs/kit';
import type { Client, Contents } from 'newt-client-js';

import { getNewtClient } from '$lib/server/newt';
import type { ResearchContent, LibraryLink } from '$lib/server/newt';
import type { PageServerLoad } from './$types';

async function getResearchContent(client: Client, slug: string): Promise<ResearchContent | null> {
	return await client.getFirstContent<ResearchContent>({
		appUid: 'exercise-date-library-js',
		modelUid: 'research-content',
		query: {
			slug: slug,
			select: [
				'name',
				'writeStatus',
				'scoreUsability',
				'scoreReadability',
				'scoreLowCode',
				'contentInstall',
				'contentHowTo'
			]
		}
	});
}

async function getLibraryLinks(client: Client, slug: string): Promise<Contents<LibraryLink>> {
	return await client.getContents<LibraryLink>({
		appUid: 'exercise-date-library-js',
		modelUid: 'library-link',
		query: {
			slug: slug,
			select: ['linkTo', 'link']
		}
	});
}

export const load = (async ({ fetch, params }) => {
	const response = await fetch('/api/cf/env');
	const env = await response.json();
	const client = getNewtClient(env.spaceUid, env.token);

	const researchContent = await getResearchContent(client, params.slug);

	if (!researchContent) throw error(404);

	const libraryLinks = await getLibraryLinks(client, params.slug);

	return {
		content: researchContent,
		links: {
			official: libraryLinks.items.find((x) => x.linkTo === 'official'),
			others: libraryLinks.items.filter((x) => x.linkTo !== 'official')
		}
	};
}) satisfies PageServerLoad;
