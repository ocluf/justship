export type Link = {
	name: string;
	href: string;
};

export type Faq = {
	question: string;
	answer: string; // HTML
};

export type DefaultSeo = {
	pageTitle: string;
	pageDescription: string;
	twitterCard: string;
	twitterSite: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage: string;
	ogType: string;
	ogTitle?: string;
	ogDescription?: string;
	ogUrl: string;
	ogImage: string;
};

export type Seo = Partial<DefaultSeo>;
