import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcHqEnEqSffT5e98803Y1F1lKzuHjI_v4",
  authDomain: "edusphere-82085.firebaseapp.com",
  projectId: "edusphere-82085",
  storageBucket: "edusphere-82085.appspot.com",
  messagingSenderId: "835074500761",
  appId: "1:835074500761:web:996e6f026c41131637f008",
  measurementId: "G-22Y1THFTEW"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();