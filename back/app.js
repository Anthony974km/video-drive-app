const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');
const db = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue dans notre API!');
});

app.use('/users', userRoutes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Erreur de synchronisation avec la base de données :', err);
});