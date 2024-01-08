const express = require('express');
const path = require('path');

const app = express();
const port = 3006;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.listen(port, () => {
    console.log('Nuestra corre en http://localhost:${port}');
});