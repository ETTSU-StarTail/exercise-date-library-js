import { createClient } from 'newt-client-js';

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

export const getNewtClient = (spaceUid: string, token: string) => {
	return createClient({
		spaceUid: spaceUid,
		token: token,
		apiType: 'cdn'
	});
};
