const express = require('express');
const getProducts = require('./getProducts')

const app = express();
const port = 3012;


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProducts)