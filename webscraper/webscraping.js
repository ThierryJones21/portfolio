const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const app = express();
const PORT = 8000;


const proxyList = [
  { protocol: 'http', host: '107.161.25.224', port: 8080 },
  { protocol: 'http', host: '154.118.228.212', port: 80 },
  { protocol: 'http', host: '117.54.114.103', port: 80 },
  // Add more proxies here as needed
];

let currentProxyIndex = 0;

const rotateProxy = () => {
  currentProxyIndex = (currentProxyIndex + 1) % proxyList.length;
  return proxyList[currentProxyIndex];
};

const scrapeWithProxy = async (url) => {
  const proxy = rotateProxy();
  try {
    const { data } = await axios.get(url, { proxy });

    const html = data;
    const all_elements = cheerio.load(html);
    const jobs = [];

    all_elements('.listing-result.listing-result-row.listingStyleDefault').each(function () {
      const url_found = all_elements(this).find('a').attr('href');
      const title = all_elements(this).find('img').attr('alt');

      jobs.push({
        title,
        url_found,
      });
    });

    console.log("HERE!");

    console.log(jobs)
  } catch (err) {
    console.error(err);
    // Handle errors or implement more advanced error handling.
    // You can adjust the retry mechanism here if needed.
    scrapeWithProxy(url);
  }
};

const url = "https://www.yachtworld.com/boats-for-sale/type-sail/country-canada/";
scrapeWithProxy(url);


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
