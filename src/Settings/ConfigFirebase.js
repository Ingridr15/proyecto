import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const config = {
    apiKey: "AIzaSyAjcwD4jXNHz6yKiboi8rczKUMp0hpAb3g",
    authDomain: "skytravel-4225f.firebaseapp.com",
    databaseURL: "https://skytravel-4225f-default-rtdb.firebaseio.com",
    projectId: "skytravel-4225f",
    storageBucket: "skytravel-4225f.appspot.com",
    messagingSenderId: "590341164970",
    appId: "1:590341164970:web:3a61e453c36d22debca5d3",
    measurementId: "G-1HNWC2TTS0"
};

const app = initializeApp(config);
const database = getDatabase();

export { app, database };