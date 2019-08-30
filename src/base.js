//package that mirrors to state
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

//created the firebase binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
