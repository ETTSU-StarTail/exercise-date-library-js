import { createClient } from 'newt-client-js';
import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from '$env/static/private';

export interface ResearchContent {
	slug: string;
	name: string;
	writeStatus: number;
	scoreUsability: number;
	scoreReadability: number;
	scoreLowCode: number;
	contentInstall: string;
	contentHowTo: string;
}

export interface LibraryLink {
	slug: string;
	linkTo: string;
	link: string;
}

export const newtClient = createClient({
	spaceUid: NEWT_SPACE_UID,
	token: NEWT_CDN_API_TOKEN,
	apiType: 'cdn'
});
