// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0aQSAin9ZltUW2tPSPOg5WIxMRCA3kgY",
  authDomain: "myfirebase-hn.firebaseapp.com",
  projectId: "myfirebase-hn",
  storageBucket: "myfirebase-hn.appspot.com",
  messagingSenderId: "770629590529",
  appId: "1:770629590529:web:7b9b50fb46a6503919ea00",
  measurementId: "G-47WW4GQCPC",
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
