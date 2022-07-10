import firebase from 'firebase';
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDxJndoYsRX5umFtgMhAhCxSHGj7FCQECk",
  authDomain: "olx-demo-4a728.firebaseapp.com",
  projectId: "olx-demo-4a728",
  storageBucket: "olx-demo-4a728.appspot.com",
  messagingSenderId: "819587192804",
  appId: "1:819587192804:web:4bb1bd4a874418a2a799f1",
  measurementId: "G-8W9B61XN5G"
};

 export default firebase.initializeApp(firebaseConfig)