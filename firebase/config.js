import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlihSDw7n6Jmcq5xvYXpu5c4HKZocNZso",
  authDomain: "postsaplication.firebaseapp.com",
  projectId: "postsaplication",
  storageBucket: "postsaplication.appspot.com",
  messagingSenderId: "158327331175",
  appId: "1:158327331175:web:15dfeade129193ca2bf7c2",
};

export const app = initializeApp(firebaseConfig);
