// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAayq5M-I1MTO_Rv5GeizVNeU-63f_Otto",
    authDomain: "clone-78f8c.firebaseapp.com",
    projectId: "clone-78f8c",
    storageBucket: "clone-78f8c.appspot.com",
    messagingSenderId: "928400244130",
    appId: "1:928400244130:web:fdb0ae1eb464d3f56a46fb",
    measurementId: "G-WPYSNFRDH6"
  };

  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  export {db}; 