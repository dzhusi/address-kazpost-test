const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()


const taskController = require('./controller/task.controller')
const priceController = require('./controller/price.controller')
const salesController = require('./controller/sales.controller')



const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.get('/api/price/search', (req, res) => {
    priceController.search().then(data => res.json(data));
});

app.get('/api/sales/search', (req, res) => {
    salesController.search().then(data => res.json(data));
});





app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})
