
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAhtX6qoTa-veO8_QhJs6J25RkZsvLItsk",
    authDomain: "inventory-management-app-ef7a1.firebaseapp.com",
    projectId: "inventory-management-app-ef7a1",
    storageBucket: "inventory-management-app-ef7a1.appspot.com",
    messagingSenderId: "87890328175",
    appId: "1:87890328175:web:e2bc72892e0acafd892b9a",
    measurementId: "G-7CY75SJJ63"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };