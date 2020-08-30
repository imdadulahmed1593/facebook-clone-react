import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAOjQVxnEs7ALECPqbjIBryoClKByaXaI8",
    authDomain: "facebook-clone-react-a8b72.firebaseapp.com",
    databaseURL: "https://facebook-clone-react-a8b72.firebaseio.com",
    projectId: "facebook-clone-react-a8b72",
    storageBucket: "facebook-clone-react-a8b72.appspot.com",
    messagingSenderId: "976387548096",
    appId: "1:976387548096:web:6b161121a5f65d42bfde25",
    measurementId: "G-VC9H10N0PX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;