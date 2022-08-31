const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()


const addressLoaderController = require('./controller/address-loader.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.get('/api/address/load', async (req, res) => {
    await addressLoaderController.loadAddresses();
})

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})
