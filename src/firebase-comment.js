import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEJZ5UGXoSOHYjR_ugMK-XbA4-jY2U4Nc",
    authDomain: "coba-88489.firebaseapp.com",
    projectId: "coba-88489",
    storageBucket: "coba-88489.appspot.com",
    messagingSenderId: "1077112537407",
    appId: "1:1077112537407:web:589b1fcfeb3261ff2a938a"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'portofolio');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };