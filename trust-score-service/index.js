const express = require('express');
const request = require('request');

const app = express()
const port = 3002

// Can be used in future for health check
app.get('/', (req, res) => res.send("Welcome to trust score service"))


app.listen(port, () => console.log(`trust score service running at http://localhost:${port}`))


app.get('/tamil', (req, res) => {
    let search_string = req.query.search_string;
    const url_options = {
        url: "https://www.googleapis.com/customsearch/v1",
        qs: {
            cx: process.env.ENGINE_ID,
            q: search_string,
            key: process.env.API_KEY
        }
    }
    request(url_options, function (error, response, body) {

        search_result = JSON.parse(body);
        // Todo calculate score only from relevant sites;
        response_object = {
            trust_score: parseInt(search_result.searchInformation.totalResults) * 0.1 ,
            citations: search_result.items 
        }

        res.send(response_object)
    });
})