import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBixrOxZzLhNMhcHEVJmckxi7g8oO9MP1A",
  authDomain: "tfl-beauty-agenda.firebaseapp.com",
  projectId: "tfl-beauty-agenda",
  storageBucket: "tfl-beauty-agenda.firebasestorage.app",
  messagingSenderId: "435788657952",
  appId: "1:435788657952:web:4de681e28f058bad8dd345",
  measurementId: "G-SV2377SZK1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
