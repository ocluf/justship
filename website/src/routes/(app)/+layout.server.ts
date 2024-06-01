import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
	let stars = 240;
	try {
		const github_info = await fetch('https://api.github.com/repos/ocluf/justship');
		const data = await github_info.json();
		stars = data.stargazers_count;
	} catch (error) {
		console.error(error);
	}

	return { user: locals.user, stars };
};
