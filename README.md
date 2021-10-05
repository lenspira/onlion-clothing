# OnLion Clothing Store

> An e-commerce store built with React Redux & Sagas, Node.js, and Google Firebase.

# Features

- User registration & authentication with Google and with email/password
- Shopping cart
- Checkout (change product quantity, remove products)
- Stripe integration

# Usage

## Environment Variables

Create a .env file in then root and add the following:

```
STRIPE_SECRET_KEY = your own stripe secret key from your stripe dashboard
```

## Install dependencies

```
# Install back-end dependencies in root folder
npm install

# Install front-end dependencies in front-end folder
cd client
npm install

# Replace the config variable in your firebase.utils.js with your own config object from the Firebase dashboard.
# Navigate to the project settings and scroll down to the config code.
# Copy the object in the code and replace the variable in your cloned code.
```

## Run

```
# Run frontend & backend
npm run dev
# Run backend only
npm run start
```

## Build & Deploy to Heroku

```
# Create frontend prod build
npm run build
# Create new Heroku app
heroku login
heroku create
# Add an environment variable for STRIPE_SECRET_KEY in your app's dashboard on Heroku
# Deploy code to Heroku
git push heroku master
```

# Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

# Links

- Project homepage: https://onlion-clothing.herokuapp.com/
- Repository: https://github.com/lenspira/onlion-clothing/
- Issue tracker: https://github.com/lenspira/onlion-clothing/issues

# License

The code in this project is licensed under MIT license.
