PROJET COVOITURAGE

 Conventions de nommage

- **IHM** : Interface Homme-Machine (Frontend)
- **UserModel** : Modèle utilisateur interagissant avec MariaDB
- **Signup** : Inscription
- **signup()** : Fonction "registerUser()"

 Installation des dépendances

Frontend

```bash
npm install react-hot-toast
npm install react-router-dom axios
npm install react-redux
```

### Backend

```bash
npm install express nodemon dotenv cors


### Authentification et sécurité

```bash
# Génération de JWT
npm install jsonwebtoken

# Gestion des cookies
npm install cookie-parser

# Hachage des mots de passe
npm install bcrypt

 Structure des responsabilités

### Frontend (IHM)
- Interface utilisateur
- Gestion des routes (`react-router-dom`)
- Requêtes HTTP (`axios`)
- Gestion de l'état global (`react-redux`)
- Notifications (`react-hot-toast`)

### Backend
- API REST avec Express
- Connexion à MariaDB
- Authentification JWT
- Gestion des cookies
- Hachage sécurisé des mots de passe avec bcrypt

 Flux d'inscription 

1. L'utilisateur remplit le formulaire d'inscription.
2. La fonction `registerUser()` est appelée.
3. Le backend valide les données reçues.
4. Le mot de passe est haché avec **bcrypt**.
5. Les informations sont enregistrées dans **MariaDB** via le **UserModel**.
6. Un **JWT** est généré puis renvoyé au client.
7. Le token est stocké dans un **cookie sécurisé**.
