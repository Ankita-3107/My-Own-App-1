import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC99eClFpiE7qZNp8XvcWZuTmDkZLcR1qI",
    authDomain: "myownapp-3b3db.firebaseapp.com",
    databaseURL: "https://myownapp-3b3db.firebaseio.com",
    projectId: "myownapp-3b3db",
    storageBucket: "myownapp-3b3db.appspot.com",
    messagingSenderId: "486261696031",
    appId: "1:486261696031:web:239c02cdb23ba1d273172a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();