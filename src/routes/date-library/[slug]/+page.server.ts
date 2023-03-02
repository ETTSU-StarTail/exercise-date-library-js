import { error } from '@sveltejs/kit';
import type { Contents } from 'newt-client-js';

import { newtClient } from '$lib/server/newt';
import type { ResearchContent, LibraryLink } from '$lib/server/newt';

async function getResearchContent(slug: string): Promise<ResearchContent | null> {
	return await newtClient.getFirstContent<ResearchContent>({
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

async function getLibraryLinks(slug: string): Promise<Contents<LibraryLink>> {
	return await newtClient.getContents<LibraryLink>({
		appUid: 'exercise-date-library-js',
		modelUid: 'library-link',
		query: {
			slug: slug,
			select: ['linkTo', 'link']
		}
	});
}

export async function load({ params }: { params: { slug: string } }) {
	const researchContent = await getResearchContent(params.slug);

	if (!researchContent) throw error(404);

	const libraryLinks = await getLibraryLinks(params.slug);

	return {
		content: researchContent,
		links: {
			official: libraryLinks.items.find((x) => x.linkTo === 'official'),
			others: libraryLinks.items.filter((x) => x.linkTo !== 'official')
		}
	};
}
