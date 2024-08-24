import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

export const stripeClient = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: '2024-04-10',
	httpClient: Stripe.createFetchHttpClient()
});
