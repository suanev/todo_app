import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJ40hP87XstBAGRjAXYI6fL0BtvuFaHQI",
    authDomain: "todo-app-f4aba.firebaseapp.com",
    databaseURL: "https://todo-app-f4aba.firebaseio.com",
    projectId: "todo-app-f4aba",
    storageBucket: "todo-app-f4aba.appspot.com",
    messagingSenderId: "546811000627",
    appId: "1:546811000627:web:871b3b6f12119fb34ff046",
    measurementId: "G-HK50ZKJMC9"
});

const db = firebaseApp.firestore();
console.log(db)

export default db;