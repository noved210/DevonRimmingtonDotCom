var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
/*import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';*/

var emailer = require('nodemailer');

// email options
const mailer = emailer.createTransport(
{
  service: 'gmail',
  auth:
  {
    user: 'xxxxxxx',
    pass: 'xxxxxxx'
  }
});

const app = express();
// const compiler = webpack(config);

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());
/* app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line*/

// app.use('/', express.static('build'));

/*
app.get('*', function response(req, res){
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
*/

app.post('/email', function(req, res){
  // check that the header information is correct

  var mailOptions =
  {
    from: 'xxxxxxx',
    to: 'xxxxxxx',
    subject: req.body.name +' - Contact',
    text: req.body.email + '\n\n' + req.body.message
  };

  mailer.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      res.status = 404;
      res.end();
    }
    else {
      console.log("email info " + info.response)
      res.status = 200;
      res.end();
    }
  });

});

app.listen(process.env.PORT || 3000);
