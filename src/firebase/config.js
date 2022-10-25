import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBaCIPou5m8HqQp1_mYtLXBADEO-g_hJ4",
    authDomain: "react-finance-tracker-c2b16.firebaseapp.com",
    projectId: "react-finance-tracker-c2b16",
    storageBucket: "react-finance-tracker-c2b16.appspot.com",
    messagingSenderId: "449234283983",
    appId: "1:449234283983:web:1705818b647482af0f36ba"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  // export the objects we want to use in the future
  export { projectFirestore, projectAuth }