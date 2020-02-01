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
export const creatUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
            })
        }catch (error) {
            console.log('error creating user',error.message)
        }
    }
    return userRef;
}


    firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set data in firebase(we do for dynamically set our data on firebase once but it can be helpful in future)
export const addCollectionAndDocument = async (collectionKey, objectToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    await batch.commit();
}

//get data back from data base
export const convertCollectionsSnapshotToMap = collections =>{
    //access to array and convert it to obj
    const transformedCollection = collections.docs.map(doc => {
        const {title , items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
     return transformedCollection.reduce((accumulator , collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
         return accumulator
    },{})
}




const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;