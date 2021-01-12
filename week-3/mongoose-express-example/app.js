require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

              // this is your database name
mongoose                          //   |
  .connect('mongodb://localhost/mongoose-express-example', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
// *local variables created in the app.js will be available in every view page.
app.locals.title = 'Mongoose / Express Example';
app.locals.errorTitle = 'Error Page';


// *** every route file that you create has to be required here in order to allow the app.js to find said route file.
// *** route files are always required at the bottom of app.js before the (module.exports = app)

// const index = require('./routes/index');
// app.use('/', index);
// ** same as above but without splitting up the variable
app.use('/', require('./routes/index'));
// this means that every route in the sample routes file needs to have /sample in front of the end point of each route created.
//          |
app.use('/sample', require('./routes/sample-routes/sample'));



module.exports = app;
