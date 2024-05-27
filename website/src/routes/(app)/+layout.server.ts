import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (e) => {
	return { user: e.locals.user };
};
