//Unique firebase object
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyDHq-s7uJBm81JPxt-z9Yi8SjMYpJQB4cI",
   authDomain: "job-seeker-c49d8.firebaseapp.com",
   projectId: "job-seeker-c49d8",
   storageBucket: "job-seeker-c49d8.appspot.com",
   messagingSenderId: "474082085886",
   appId: "1:474082085886:web:c49b416cbea0bb0d96ceaf"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 //Variable to access

 const db = firestore.collection("formdata");
 //Save  form data

 db.doc().set({
    name: nameInput
 }).then( () => {
    console.log(" data  saved")
 }).catch((error) =>{
    console.log("error")
 })