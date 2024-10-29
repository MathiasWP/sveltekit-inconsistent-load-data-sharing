import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
    // Year is defined on the server load and passed to the layout load
	return { year: 2024 };
};
