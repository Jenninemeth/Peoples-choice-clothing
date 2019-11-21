import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAttTqwZIGY_cdPe8emwxaTcPDOfVgOSTg",
    authDomain: "crwn-db-9a7ac.firebaseapp.com",
    databaseURL: "https://crwn-db-9a7ac.firebaseio.com",
    projectId: "crwn-db-9a7ac",
    storageBucket: "crwn-db-9a7ac.appspot.com",
    messagingSenderId: "351288073821",
    appId: "1:351288073821:web:726fd5c9c2975acc30b7b4"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if sign-in fails, then exit function
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


