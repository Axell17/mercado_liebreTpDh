const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});


const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log('Nuestra corre en http://localhost:${port}');
});