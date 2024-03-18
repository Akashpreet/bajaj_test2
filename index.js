var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': 'BrowserId=Sd_rFeUGEe61TysgxhxTFQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  body: JSON.stringify({
    "name": "Akashpreet Singh",
    "email": "akashpreet0117.be21@chitkara.edu.in",
    "rollNumber": 2110990117,
    "phone": 7986148188
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
