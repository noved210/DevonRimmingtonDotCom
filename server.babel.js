var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var request = require('request');

/*import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';*/

// var emailer = require('nodemailer');

var ses = require('node-ses');

// email options
/*
const mailer = emailer.createTransport(
{
  service: 'gmail',
  auth:
  {
    user: '',
    pass: ''
  }
});
*/

var client = ses.createClient({key: '', secret: ''});

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


function verifyRecaptcha(req)
{
  request.post('https://www.google.com/recaptcha/api/siteverify',
    {form:
    {
      secret: '',
      response: req.body.g_recaptcha_response,
      remoteip: req.connection.remoteAddress
    }
  },(err, httpRes, body)=>
    {
      if(err)
      {
        console.log('failed');
	return;
      }
      else
      {
        console.log(JSON.parse(body));
        return;
      }
  });

  return;
}


app.post('/email', function(req, res)
{
  // check that the header information is correct

  var mailOptions =
  {
    from: '',
    to: '',
    subject: req.body.name +' - Contact',
    text: req.body.email + '\n\n' + req.body.message
  };

  verifyRecaptcha(req);

  console.log('email is about to happen');

  client.sendEmail
  ({
    to:'',
    from: '',
    subject: 'test',
    message: 'testtest'
    },
    function(err, data, _res) {

      if(err)
      {
	res.status = 500;
	console.log('error');
	res.end();
      }
      else
      {
     	res.status = 200;
	console.log('not error');
	res.end();
      }     
    }
  );

/*
  mailer.sendMail(mailOptions, function(err, info)
  {
    if(err)
    {
      console.log(err);
      res.status = 404;
      res.end();
    }
    else 
    {
      console.log("email info " + info.response)
      res.status = 200;
      res.end();
    }
  });
*/
});

app.listen(process.env.PORT || 8000);
