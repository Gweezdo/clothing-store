import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDVYrGg453EStsPQfyvOXsAzpI05AgfMmY",
  authDomain: "crown-db-57190.firebaseapp.com",
  projectId: "crown-db-57190",
  storageBucket: "crown-db-57190.appspot.com",
  messagingSenderId: "320679448243",
  appId: "1:320679448243:web:27154c10d82e9236a3aac6",
  measurementId: "G-V1D5Z2MGHW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;