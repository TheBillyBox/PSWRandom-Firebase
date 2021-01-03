  import firebase from 'firebase'
 // import firestore from 'firebase/firestore'
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFwaYCs4nRVHpkP_k1q3zhI2zgW2rC5dY",
    authDomain: "loginrandomizepsd.firebaseapp.com",
    projectId: "loginrandomizepsd",
    storageBucket: "loginrandomizepsd.appspot.com",
    messagingSenderId: "938091996113",
    appId: "1:938091996113:web:a5ec54d5622b1c1225b6f0",
    measurementId: "G-6L6H4CPH12"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore();
//prueba