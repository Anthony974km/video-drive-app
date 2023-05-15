import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51N7udGD8fIYjfM4woGDAWRAY8fxzBEjxEW47SCuXE2MnbQwMgaqxUL3swZzmlrA2AzheDYvhuIanHyqOA2ZxXgOQ001wbFBqgH'); // Remplacez par votre clé publique Stripe
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const clientSecret = "pi_3N80O1D8fIYjfM4w0gdvUCuq_secret_QPTaYBIAXRICQ4NLCkNhMVgj4"; // Replace with the actual clientSecret returned by your server

        if (!stripe || !elements) {
            // Stripe is not yet ready
            return;
        }

        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                // Payment error
                console.log('Payment error:', error.message);
            } else {
                // Payment successful
                console.log('Payment successful:', paymentIntent);
            }
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    );
};

const App = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default App;