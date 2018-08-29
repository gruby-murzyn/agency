// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
// CORS Middleware
app.use(cors());
// Port Number
const port = process.env.PORT || 3000
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname, '/majeni/dist/majeni')));
// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//routes
const contact = require('./app/routes/contact');
app.use('/contact', contact);
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/majeni/dist/majeni/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});