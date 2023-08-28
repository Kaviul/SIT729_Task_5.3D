const http = require('http');
setInterval(loadtest, 500); //time is in ms
function loadtest()
{
http.get('http://kav-lb-887472083.us-east-1.elb.amazonaws.com', (res) => {
res.on('data', function (chunk) {
console.log('' + chunk);
});
});
}