import type { Contents } from 'newt-client-js';

import { newtClient } from '$lib/server/newt';
import type { ResearchContent } from '$lib/server/newt';

async function getResearchContents(): Promise<Contents<ResearchContent>> {
	return await newtClient.getContents<ResearchContent>({
		appUid: 'exercise-date-library-js',
		modelUid: 'research-content',
		query: {
			select: ['slug', 'name']
		}
	});
}

export async function load() {
	const researchContents = await getResearchContents();

	return {
		contents: researchContents.items
	};
}
