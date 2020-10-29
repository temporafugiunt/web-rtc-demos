const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

function getLanguagePath(req) {
  console.log(`LANGUAGE: ${req.cookies.language}`);
  return {
    'en': '/en',
    'es': '/es'
  }[req.cookies.language] || '/en';
}

console.log(__dirname + '\\en');
app.use(cookieParser());
app.use('/en', express.static(__dirname + '\\en'));
app.use('/es', express.static(__dirname + '\\es'));
app.get('/', function(req, res) {
  console.log('Redirecting...');
  res.redirect(getLanguagePath(req));
});

app.use(express.urlencoded({extended: false}));

var port = process.env.PORT || 4200;

app.listen(port, function(err) {
  if (err) console.log(err);
  console.log('Server listening on port ' + port);
});