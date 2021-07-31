import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0c6EFlZx82m9M9pqWGhMxfyJABC97xwo",
    authDomain: "auth-5dc83.firebaseapp.com",
    projectId: "auth-5dc83",
    storageBucket: "auth-5dc83.appspot.com",
    messagingSenderId: "580518119756",
    appId: "1:580518119756:web:5d32526a12946f199367e9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };