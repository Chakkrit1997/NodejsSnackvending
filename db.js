const firebase = require('firebase');
const config = require('./config');

const db = firebase.inititializeApp(config.firebaseConfig);
module.exports = db;