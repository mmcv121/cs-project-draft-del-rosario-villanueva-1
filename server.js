const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

// Home route
app.get('/', (req, res) => {
    res.render('index.hbs');
});

// Route for the Style page
app.get('/style', (req, res) => {
    res.render('style.hbs');  // Ensure this file exists in the views folder
});

// Route for the Help Center page
app.get('/help', (req, res) => {
    res.render('help.hbs');  // Ensure this file exists in the views folder
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
