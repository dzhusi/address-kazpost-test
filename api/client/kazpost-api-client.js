const axios = require('axios');
const https = require('https');

const kazpostApiClient = axios.create({
    baseURL: 'https://api.post.kz/api/',
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

module.exports = kazpostApiClient;
