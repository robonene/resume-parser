import { initializeApp } from "firebase/app"; // "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
//import { getAnalytics } from "firebase/analytics"; // "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js"
import { getFirestore} from "firebase/firestore"; // "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJT6nWQMaVYf7rFCJ6akJ7bSizFcGyelI",
    authDomain: "resumeparse-2023.firebaseapp.com",
    projectId: "resumeparse-2023",
    storageBucket: "resumeparse-2023.appspot.com",
    messagingSenderId: "445455377403",
    appId: "1:445455377403:web:04834b404480654178615e",
    measurementId: "G-WL99SLE3C9"
};
  
  // Initialize Firebase
  // aka Root References
  // these are the api references ****
const cloudsave = initializeApp(firebaseConfig); // the app is called 'cloudsave' for now 
//const analytics = getAnalytics(cloudsave);

const db = getFirestore(cloudsave);

const storage = getStorage();
const storageRef = ref(storage);


function uploadFile(file) {
    const fileRef = ref(storage, file.name);
    uploadBytes(fileRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}

//const imagesRef = ref(storage, "Nene.png")
//console.log(imagesRef.fullPath);
//console.log("The function works!")

export { db, storage, uploadFile };