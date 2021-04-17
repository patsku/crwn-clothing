import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFuUYzOWe7lROkxdsLRuov4AFOphl1i6c",
    authDomain: "crwn-db-7c578.firebaseapp.com",
    projectId: "crwn-db-7c578",
    storageBucket: "crwn-db-7c578.appspot.com",
    messagingSenderId: "742231031055",
    appId: "1:742231031055:web:57266b55b3ab53319e127a",
    measurementId: "G-NHZTW4R7J3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;