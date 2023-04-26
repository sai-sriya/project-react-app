import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, GetFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEVEcJOSN-ksve4WLB7st_DaiJK9KhXgE",
    authDomain: "blog-website-bcbd6.firebaseapp.com",
    projectId: "blog-website-bcbd6",
    storageBucket: "blog-website-bcbd6.appspot.com",
    messagingSenderId: "322811066559",
    appId: "1:322811066559:web:dc90ae60306f3417992e0a",
    measurementId: "G-0RSMD21HS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);





// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, GetFireStore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBGqELgotJzSDtndv0PPYkbb5p6wnFoCi8",
//     authDomain: "travel-4379d.firebaseapp.com",
//     projectId: "travel-4379d",
//     storageBucket: "travel-4379d.appspot.com",
//     messagingSenderId: "894529175715",
//     appId: "1:894529175715:web:adf962a8fb9928be29bf16",
//     measurementId: "G-GL06256Z8L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// export const db = getFirestore(app);
