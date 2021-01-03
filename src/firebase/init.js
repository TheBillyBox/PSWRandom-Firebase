  import firebase from 'firebase'
 // import firestore from 'firebase/firestore'
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //Add your personal firebase config
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore();
