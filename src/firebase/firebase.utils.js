// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  updateProfile,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-mZJWTPRt0GA4W0Muv8yyMcPdI2TTDB8",
  authDomain: "crown-clothing-db-5d214.firebaseapp.com",
  projectId: "crown-clothing-db-5d214",
  storageBucket: "crown-clothing-db-5d214.appspot.com",
  messagingSenderId: "408767685722",
  appId: "1:408767685722:web:042a3ebdc58e6d8b2b2463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});


export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('userAuth1',userAuth);
  if (!userAuth) return 

  const userRef = doc(db, 'users', userAuth.uid); // Path to the document
  const userData = await getDoc(userRef);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      const displayNameValue = displayName || 'Anonymous';
      await setDoc(userRef, {
        displayName: displayNameValue,
        email,
        createdAt,
        ...additionalData, // Merge any additional data you want to store
      });
      console.log('display nameee util.js', displayNameValue);
      console.log('display email util.js', email);

    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userData;
};



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signUpWithEmailPassword = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

const updateDisplayName = async (user, displayName) => {
  if (user) {
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      return user;
    } catch (error) {
      console.log('error updating display name', error.message);
    }
  }
};

export const signUpWithEmailPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password)

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth,name) => {
  console.log('userAuth2',userAuth);
  console.log(name);
  console.log('uid');
  const userRef = doc(db,'users',userAuth.uid); //Path to the document
  const userData = await getDoc(userRef);
  console.log('userData util.js',userData);
  if (!userData.exists()){
    const {displayName, email} = userAuth;
    console.log('display Name',userAuth);
    const createdAt = new Date();
    try{
      if(name==null){
        name='Sign in with Google'
      }
      const displayNameValue = displayName || 'Anonymous';
      await setDoc (userRef, {
        displayName:name,
        email,
        createdAt,
      });
      // console.log('display nameee util.js',displayNameValue);
      // console.log('display email util.js',email);

    }catch (error){
      console.log('error creating the user', error.message);
    }
  }
  return userData;
}




