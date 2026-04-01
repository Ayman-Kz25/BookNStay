import Stripe from 'stripe';
import Booking from '../models/Booking.js';


// API to handle Stripe Webhooks
export const stripeWebhooks = async (req, res) => {
    //Initialize Stripe Gateway
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];
    let event;

    try {

        event = stripeInstance.webhooks.constructEvent(
            req.body, 
            sig, 
            process.env.STRIPE_WEBHOOK_SECRET
        );

    } catch (error) {
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    //Handle the event
    if(event.type === 'payment_intent.succeeded'){
        const payIntent = event.data.object;
        const payIntentId = payIntent.id;

        //getting session metadata
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: payIntentId,
        });

        const {bookingId} = session.data[0].metadata;

        //marks payment as Paid
        await Booking.findByIdAndUpdate(bookingId, {
            isPaid: true, 
            paymentMethod: "Stripe", 
            status: "confirmed"
        });

    } else {
        console.log("Unhandled Event type: ", event.type);
    }

    res.json({received: true});
}