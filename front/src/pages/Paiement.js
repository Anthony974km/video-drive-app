import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../styles/components/_CheckoutForm.scss";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51N7udGD8fIYjfM4woGDAWRAY8fxzBEjxEW47SCuXE2MnbQwMgaqxUL3swZzmlrA2AzheDYvhuIanHyqOA2ZxXgOQ001wbFBqgH");

export default function Paiement() {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();
    const [prix, setPrix] = useState(null);

    useEffect(() => {
        // Effectuer la requête à l'API en utilisant l'ID du produit
        fetch(`http://localhost:3000/produits/${id}`)
            .then((response) => response.json())
            .then((data) => setPrix(data.prix));

    }, [id]);
    useEffect(() => {
        console.log(prix);
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3000/paiement", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ montant: prix }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [prix]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="Modal">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}