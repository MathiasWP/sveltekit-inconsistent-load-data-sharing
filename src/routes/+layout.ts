import type { LayoutLoad } from './$types';

// +layout.server.ts runs when SSR is false, which makes sense since code has to run on the server on the initial request
export const ssr = false;

export const load: LayoutLoad = ({ data }) => {
    // "data.year" is defined in +layout.server.ts, and the types are correctly defined
    // but if we route to a page that doesn't exist "data" is suddenly null
	return { year: data.year };
};
