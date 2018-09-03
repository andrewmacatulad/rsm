var firebase = require("firebase");

// Initialize Firebase
try {
  const config = {
    apiKey: "AIzaSyBiaNMVGNdL6uCW9sqvELOr16NNXAWS0YU",
    authDomain: "todo-app-test-f602b.firebaseapp.com",
    databaseURL: "https://todo-app-test-f602b.firebaseio.com",
    projectId: "todo-app-test-f602b",
    storageBucket: "todo-app-test-f602b.appspot.com",
    messagingSenderId: "556648748777"
  };
  firebase.initializeApp(config);
} catch (e) {}

export default firebase;

// API_KEY=AIzaSyBiaNMVGNdL6uCW9sqvELOr16NNXAWS0YU
// AUTH_DOMAIN=todo-app-test-f602b.firebaseapp.com
// DATABASE_URL=https://todo-app-test-f602b.firebaseio.com
// PROJECT_ID=todo-app-test-f602b
// STORAGE_BUCKET=todo-app-test-f602b.appspot.com
// MESSAGING_SENDER_ID=556648748777
// GITHUB_ACCESS_TOKEN=a3ab4a1c49a9d6657decb2738aa49429d16d23a3
