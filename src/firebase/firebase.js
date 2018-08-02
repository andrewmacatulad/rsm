var firebase = require("firebase");

// Initialize Firebase
try {
  const config = {
    apiKey: "test",
    authDomain: "test",
    databaseURL: "test",
    projectId: "test",
    storageBucket: "test",
    messagingSenderId: "tes"
  };
  firebase.initializeApp(config);
} catch (e) {}

export default firebase;
