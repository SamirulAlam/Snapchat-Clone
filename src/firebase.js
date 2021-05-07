import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCBTKUZ_hqbwueePPVDyrVhvVyeGwzMIs",
    authDomain: "snapchat-clone-da12b.firebaseapp.com",
    projectId: "snapchat-clone-da12b",
    storageBucket: "snapchat-clone-da12b.appspot.com",
    messagingSenderId: "154365882256",
    appId: "1:154365882256:web:d6341a335b8118359a0d15"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};