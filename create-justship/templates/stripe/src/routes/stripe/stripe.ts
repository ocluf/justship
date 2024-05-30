import Stripe from 'stripe';

import { STRIPE_SECRET_KEY, STRIPE_SECRET_KEY_TEST } from '$env/static/private';

const api_key = import.meta.env.PROD ? STRIPE_SECRET_KEY : STRIPE_SECRET_KEY_TEST;

export const stripeClient = new Stripe(api_key, {
	apiVersion: '2024-04-10',
	httpClient: Stripe.createFetchHttpClient()
});
