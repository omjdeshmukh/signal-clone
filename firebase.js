import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTsx7YlPAHnNvh2OnuI114tbLvu2flE2I",
  authDomain: "signal-clone-om.firebaseapp.com",
  projectId: "signal-clone-om",
  storageBucket: "signal-clone-om.appspot.com",
  messagingSenderId: "736191197579",
  appId: "1:736191197579:web:e7754f336f4e1e121c3f8e",
};

let app;

console.log(firebase.app.length);

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
