// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
				NEWT_CDN_API_TOKEN: string;
				NEWT_SPACE_UID: string;
			};
		}
	}
}

export {};
