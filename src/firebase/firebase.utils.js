import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAImcK8GbaanJc7YVFUEaeRDlnogcVEF3c",
     authDomain: "crwn-db-e00b1.firebaseapp.com",
     databaseURL: "https://crwn-db-e00b1.firebaseio.com",
     projectId: "crwn-db-e00b1",
     storageBucket: "crwn-db-e00b1.appspot.com",
     messagingSenderId: "1057338552185",
     appId: "1:1057338552185:web:aee36a760e7f34f12389a8",
     measurementId: "G-EZ4R7WGE8Z"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
