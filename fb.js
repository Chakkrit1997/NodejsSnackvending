  // Set the configuration for your app
  // TODO: Replace with your project's config object
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