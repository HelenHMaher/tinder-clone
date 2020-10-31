import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2alzbd85uxF-YNksCezHJovGiVaYv3Og",
  authDomain: "tinder-clone-41349.firebaseapp.com",
  databaseURL: "https://tinder-clone-41349.firebaseio.com",
  projectId: "tinder-clone-41349",
  storageBucket: "tinder-clone-41349.appspot.com",
  messagingSenderId: "567413360722",
  appId: "1:567413360722:web:45d3e4d123c1e9fc85f78b",
  measurementId: "G-ZNJNJB0HK6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
