// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async (e: Parameters<LayoutServerLoad>[0]) => {
	return { user: e.locals.user };
};
