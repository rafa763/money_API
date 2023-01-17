const express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const request = require('request');

const app = express();

// get the exchange rate from the NBE website
// axios
//     .get("https://www.nbe.com.eg/NBE/E/#/EN/ExchangeRatesAndCurrencyConverter")
//     .then((response) => {
//       const $ = Cheerio.load(response.data);
//       console.log(response.data);
//       const rate = $('.currency-table').find('td:contains("USD")').text();
//       console.log(rate);
//     });
request('https://www.cbe.org.eg/en/EconomicResearch/Statistics/Pages/ExchangeRatesListing.aspx', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        // table = $('.currenct')
        
        const rate = $('.table').text();
        console.log(rate);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

