const express = require('express');
const path = require('path');

const app = express();

// Définir EJS comme moteur de vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour analyser les données des formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Route pour la page d'accueil
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "accueil.ejs"));
});

// Route pour gérer la création de compte
app.post("/creer-compte", (req, res) => {
    const { nom, prenom, adresse, telephone } = req.body;
    console.log(`Compte créé pour ${prenom} ${nom}, Adresse : ${adresse}, Téléphone : ${telephone}`);
    res.send(`Compte créé pour ${prenom} ${nom}. Merci pour votre inscription !`);
});

// Route pour gérer une réservation
app.post("/reserver", (req, res) => {
    const { nom, prenom, offre, nombre } = req.body;
    console.log(`Réservation reçue pour ${prenom} ${nom}, Offre : ${offre}, Nombre : ${nombre}`);
    res.send(`Merci ${prenom} ${nom}, votre réservation pour l'offre "${offre}" a été enregistrée.`);
});

// Route pour la page de contact
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.ejs"));
});


// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

