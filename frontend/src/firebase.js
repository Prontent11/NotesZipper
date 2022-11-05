// import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAkydRO7aNtVIo07eJKQnUV5YRjV8b0gak",
    authDomain: "whatsapp-clone-8830e.firebaseapp.com",
    projectId: "whatsapp-clone-8830e",
    storageBucket: "whatsapp-clone-8830e.appspot.com",
    messagingSenderId: "653238208904",
    appId: "1:653238208904:web:9ffb6194ca973d0094123d",
    measurementId: "G-E3MEC40R9X"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;