const express = require('express')
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
//const mysql = require('mysql');
const path = require('path');
const app = express();
const firebase = require('firebase');

const { getHomePage } = require('./routes/index');
const { editProducts } = require('./routes/edit-products');

//const PORT = process.env.PORT || 5000
const port = 5000;

var config = {
  apiKey: "AIzaSyA_-mJIigvTuJP1XWES2ZTOSlh2nMCsU7U",
  authDomain: "snackvending-c37c3.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://snackvending-c37c3.firebaseio.com",
  storageBucket: "snackvending-c37c3.appspot.com"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
global.database = database;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());

//app.get('/', (req, res) => res.render('pages/index'));
app.get('/', getHomePage);
app.get('/edit', editProducts);


app.listen(port, () => {
  console.log(`Server running on port : ${port}`)
});

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// app.get('/', (req, res) => res.render('pages/index'))
// app.get('/snack', (req, res) => res.render('pages/snack'))


// app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
// app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port))
