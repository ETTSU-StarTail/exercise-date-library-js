import type { Client, Contents } from 'newt-client-js';

import { getNewtClient, type ResearchContent } from '$lib/server/newt';
import type { LayoutServerLoad } from './$types';

async function getResearchContents(client: Client): Promise<Contents<ResearchContent>> {
	return await client.getContents<ResearchContent>({
		appUid: 'exercise-date-library-js',
		modelUid: 'research-content',
		query: {
			select: ['slug', 'name']
		}
	});
}

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/cf/env');
	const env = await response.json();
	const client = getNewtClient(env.spaceUid, env.token);

	const researchContents = await getResearchContents(client);

	return {
		contents: researchContents.items
	};
}) satisfies LayoutServerLoad;
