import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get,set } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCllfo-LqTZ-SuprWqW_kOZqZWMylBFLQk",
    authDomain: "chess-react-11974.firebaseapp.com",
    databaseURL: "https://chess-react-11974-default-rtdb.firebaseio.com",
    projectId: "chess-react-11974",
    storageBucket: "chess-react-11974.appspot.com",
    messagingSenderId: "783279033043",
    appId: "1:783279033043:web:680098aea152cae0e0a226",
    measurementId: "G-181QP2SVKQ"
  };

// Initialize Firebase app with error handling
let firebaseApp;
try {
    firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
    console.error('Error initializing Firebase:', error);
    // Handle initialization error (e.g., show an error message, fallback mechanism)
}

// Export Firebase database methods directly
const database = getDatabase(firebaseApp);

// Export Firebase authentication methods
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { firebaseApp, database, ref, get, set ,auth, googleProvider };