import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
  const cloudsave = initializeApp(firebaseConfig); // the app is called 'cloudsave' for now
  const analytics = getAnalytics(cloudsave);
  const db = getFirestore(cloudsave);

  var uploader = document.getElementById("fileButton");
  
  fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('img/'+file.name);
    var task = storageRef.put(file);
  }
  