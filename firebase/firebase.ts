import { initializeApp } from 'firebase/app';

const credentials = {
    apiKey: "AIzaSyClEUEa8Vvy8BKEHCIHDuHdumPA7a4YHDo",
    authDomain: "task-project-723cc.firebaseapp.com",
    databaseURL: "https://task-project-723cc.firebaseio.com",
    projectId: "task-project-723cc",
    storageBucket: "task-project-723cc.appspot.com",
    messagingSenderId: "72751099473",
    appId: "1:72751099473:web:d11e8d12a77eda68a79270",
    measurementId: "G-1ED10QBLBK"
}

const firebase = initializeApp(credentials);

export default firebase;