import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

//    - firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAlE-47ICJy-WBoia8cZZKMXu77j_uLwz0",
//   authDomain: "vehicleparking-2605a.firebaseapp.com",
//   projectId: "vehicleparking-2605a",
//   storageBucket: "vehicleparking-2605a.appspot.com",
//   messagingSenderId: "851913236223",
//   appId: "1:851913236223:web:3ca5e5aa91b6e4a75db6ca",
//   measurementId: "G-VYK9JHCKCQ",
// };

// gd fb
const firebaseConfig = {
  apiKey: "AIzaSyCUYGT9X4QNU860AqiTmke923lZj2EDltI",
  authDomain: "speedparking-proj.firebaseapp.com",
  databaseURL: "https://speedparking-proj-default-rtdb.firebaseio.com",
  projectId: "speedparking-proj",
  storageBucket: "speedparking-proj.appspot.com",
  messagingSenderId: "104625690574",
  appId: "1:104625690574:web:4cb5ea3b46b7a504bafd9f",
  measurementId: "G-YD2VPL7NRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
