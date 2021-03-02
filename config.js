import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCBmaUZms3u1wgsKkPwzGFT6Hs2Ltc_jIg",
  authDomain: "book-santa-628a8.firebaseapp.com",
  databaseURL: "https://book-santa-628a8.firebaseio.com",
  projectId: "book-santa-628a8",
  storageBucket: "book-santa-628a8.appspot.com",
  messagingSenderId: "378844748849",
  appId: "1:378844748849:web:4caf698ae84e3ad59e4910"

  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();