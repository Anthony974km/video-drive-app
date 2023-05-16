const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');
const produitRoutes = require('./routes/produits');

const db = require('./models');
const stripe = require('stripe')('');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue dans notre API!');
});

app.use('/users', userRoutes);
app.use('/produits', produitRoutes); // Utilisation de 'produits' au lieu de 'produit'
app.post('/paiement', async (req, res) => {
    try {
        // Récupérer le montant à partir du corps de la requête JSON
        const montant = req.body.montant;

        // Créer le paiement avec le montant récupéré
        const paymentIntent = await stripe.paymentIntents.create({
            amount: montant * 100, // Convertir le montant en centimes
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Erreur de synchronisation avec la base de données :', err);
});
