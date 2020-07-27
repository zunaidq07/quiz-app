import firebase from 'firebase'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "quizzzzapp.firebaseapp.com",
    databaseURL: "https://quizzzzapp.firebaseio.com",
    projectId: "quizzzzapp",
    storageBucket: "quizzzzapp.appspot.com",
    messagingSenderId: "88783347517",
    appId: "1:88783347517:web:badf19a37d822df77c2f54",
    measurementId: "G-LWYJE4GH4F"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default Firebase