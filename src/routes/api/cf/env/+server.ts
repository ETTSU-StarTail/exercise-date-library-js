import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export const GET = (async ({ platform }) => {
	return json({
		spaceUid: platform?.env?.NEWT_SPACE_UID ?? NEWT_SPACE_UID ?? 'ettsu',
		token:
			platform?.env?.NEWT_CDN_API_TOKEN ??
			NEWT_CDN_API_TOKEN ??
			'jEQ-aE4V5HlQXEJqVr7nmj0hBFE_JcYb8lBGOiEABDQ'
	});
}) satisfies RequestHandler;
