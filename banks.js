const axios = require("axios");
const Cheerio = require("cheerio");

function rate() {
  return axios
    .get("https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/")
    .then((response) => {
      const $ = Cheerio.load(response.data);
      const rate = $("td:contains('USD')").next().text();
      return rate;
    });
}

rate()