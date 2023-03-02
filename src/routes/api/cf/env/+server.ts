import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export const GET = (({ platform }) => {
	return json({
		spaceUid: platform?.env.NEWT_SPACE_UID ?? NEWT_SPACE_UID,
		token: platform?.env.NEWT_CDN_API_TOKEN ?? NEWT_CDN_API_TOKEN
	});
}) satisfies RequestHandler;
