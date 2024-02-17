import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJHFtE1JPllJxCdGJCnAkLOPF-pm6IaKg",
  authDomain: "disneyplus-clone-94cd5.firebaseapp.com",
  projectId: "disneyplus-clone-94cd5",
  storageBucket: "disneyplus-clone-94cd5.appspot.com",
  messagingSenderId: "502397287268",
  appId: "1:502397287268:web:0dc5aa629e3f5c3509d871",
  measurementId: "G-N35S6X2H7F"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
