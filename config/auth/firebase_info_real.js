import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "Firebase Web API Key Here",
  authDomain: "mobile-fitness-planner.firebaseapp.com",
  databaseURL: "https://mobile-fitness-planner.firebaseio.com",
  projectId: "mobile-fitness-planner",
  storageBucket: "mobile-fitness-planner.appspot.com",
  messagingSenderId: "Sender ID Here"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();