import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR89HHmQI4EwOvKPuwV53DzAtSudDwjl4",
  authDomain: "linkedin-clone-68ed1.firebaseapp.com",
  projectId: "linkedin-clone-68ed1",
  storageBucket: "linkedin-clone-68ed1.appspot.com",
  messagingSenderId: "1074101235164",
  appId: "1:1074101235164:web:0f776fd124bd846906b319",
  measurementId: "G-9FXT5EJF8M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }

export default db;