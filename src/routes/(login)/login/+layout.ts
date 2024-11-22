import { PUBLIC_PROJECT_NAME } from '$env/static/public';
import type { Meta } from '$lib/meta';

export const load = async () => {
	const meta: Meta = {
		title: `${PUBLIC_PROJECT_NAME} | Login`,
		description: `The Login page for ${PUBLIC_PROJECT_NAME}`
	};
	return { meta };
};
