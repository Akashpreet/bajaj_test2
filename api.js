var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': 'BrowserId=Sd_rFeUGEe61TysgxhxTFQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  body: JSON.stringify({
    "company": "bajaj finserv",
    "currentPrice": 1579.4,
    "accountNumber": "BFHL0018643",
    "githubRepoLink": "https://github.com/Akashpreet/bajaj_test2"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
