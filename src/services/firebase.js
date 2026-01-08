import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword as fbSignIn, 
  createUserWithEmailAndPassword as fbCreateUser, 
  signOut as fbSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  updateDoc, 
  onSnapshot 
} from 'firebase/firestore';

let app, auth, db;

const myRealConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const configError = (() => {
  console.log("Firebase: Starting initialization IIFE...");
  try {
    if (typeof __firebase_config !== 'undefined') {
      app = initializeApp(JSON.parse(__firebase_config));
    } else {
      app = initializeApp(myRealConfig);
    }
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase: app, auth, db initialized successfully.", { app, auth, db });
    console.log("Firebase: configError set to false.");
    return false;
  } catch (e) {
    console.error("Firebase: Initialization failed:", e);
    console.log("Firebase: configError set to true.");
    return true;
  }
})();

console.log("Firebase: configError value after IIFE: ", configError);

// --- Auth Helpers ---
export const signIn = (email, password) => fbSignIn(auth, email, password);
export const register = (email, password) => fbCreateUser(auth, email, password);
export const logout = () => fbSignOut(auth);
export const subscribeToAuth = (callback) => onAuthStateChanged(auth, callback);

// --- Stats Helpers ---
const appId = 'vet-exam-app';

export const getStatsRef = (uid) => doc(db, 'artifacts', appId, 'users', uid, 'data', 'stats');

export const subscribeToStats = (uid, callback) => {
  const statsRef = getStatsRef(uid);
  return onSnapshot(statsRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    } else {
      const initialStats = { totalAnswered: 0, totalCorrect: 0, byTopic: {}, examHistory: [], dailyActivity: {} };
      setDoc(statsRef, initialStats);
      callback(initialStats);
    }
  });
};

export const updateStatsInDB = (uid, newStats) => {
  const statsRef = getStatsRef(uid);
  return updateDoc(statsRef, newStats);
};

export { auth, db };
export default app;
