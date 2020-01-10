import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



const config =  {
    apiKey: "AIzaSyBH0_laj1x_4y3v2brCkJlooO1UiAdO9QQ",
    authDomain: "crwn-db-3b945.firebaseapp.com",
    databaseURL: "https://crwn-db-3b945.firebaseio.com",
    projectId: "crwn-db-3b945",
    storageBucket: "crwn-db-3b945.appspot.com",
    messagingSenderId: "1058140605211",
    appId: "1:1058140605211:web:60a890852737d153e5e1be",
    measurementId: "G-WBMXR6SVJN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;