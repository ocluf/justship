import { json, type RequestEvent } from '@sveltejs/kit';
import { stripeClient } from '../stripe';

export async function POST(event: RequestEvent): Promise<Response> {
	const data = await event.request.json();
	const priceId = data.priceId;

	if (typeof data.priceId !== 'string') {
		return json({
			status: 400,
			error: {
				message: 'priceId is required'
			}
		});
	}

	try {
		const session = await stripeClient.checkout.sessions.create({
			mode: 'subscription',
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],

			success_url: `${event.url.origin}/?sessionId={CHECKOUT_SESSION_ID}`,
			cancel_url: `${event.url.origin}`
		});
		if (!session.url) {
			throw new Error('No session URL');
		}
		// go to checkout session url in frontend to complete the payment
		// serverside redirect to strip give a cors error
		return json({ url: session.url });
	} catch (error) {
		console.error(error);
		return json({
			status: 500,
			error
		});
	}
}
