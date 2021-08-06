import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACYFxuWWjm1lUvnj-yG55hmlEli4yDfjo",
    authDomain: "eaduvida-11145.firebaseapp.com",
    projectId: "eaduvida-11145",
    storageBucket: "eaduvida-11145.appspot.com",
    messagingSenderId: "277215660169",
    appId: "1:277215660169:web:ee85b673a04d3f03655e58",
    measurementId: "G-C5MXBZ661Q"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();

