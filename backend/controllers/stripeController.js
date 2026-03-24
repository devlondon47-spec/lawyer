const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_mock');
const User = require('../models/User');

// @route POST /api/stripe/create-checkout-session
const createCheckoutSession = async (req, res) => {
    try {
        const { planType } = req.body;
        const userId = req.user._id;
        const unit_amount = planType === 'yearly' ? 34800 : 2900;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price_data: { currency: 'usd', product_data: { name: `LawConnect Premium (${planType})` }, unit_amount }, quantity: 1 }],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/premium?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/premium?canceled=true`,
            client_reference_id: userId.toString()
        });

        res.json({ id: session.id, url: session.url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// @route POST /api/stripe/webhook
const handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        await User.findByIdAndUpdate(session.client_reference_id, { isPremium: true, subscriptionId: session.id });
    }
    res.json({ received: true });
};

// @route POST /api/stripe/confirm  (manual confirmation after return from Stripe)
const confirmPayment = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, { isPremium: true }, { new: true }).select('-password');
        res.json({ msg: 'Premium activated!', user });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

module.exports = { createCheckoutSession, handleWebhook, confirmPayment };
