const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000, () =>
    console.log('El servidor local está funcionando')
);

app.get('/', (req,res) => {
    res.send('Bienvenido a la página de entrada')
});

app.get('/detalle-de-producto', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});
