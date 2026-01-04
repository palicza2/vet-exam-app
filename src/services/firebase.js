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
let configError = false;

const myRealConfig = {
  apiKey: "AIzaSyDY0pJFOZl2qvBldGqdpY8hDvBKryEhE-w",
  authDomain: "vet-exam-app.firebaseapp.com",
  projectId: "vet-exam-app",
  storageBucket: "vet-exam-app.firebasestorage.app",
  messagingSenderId: "667121013022",
  appId: "1:667121013022:web:d12599eb4250315c21f90f",
  measurementId: "G-84Z79H0EMC"
};

try {
  if (typeof __firebase_config !== 'undefined') {
    app = initializeApp(JSON.parse(__firebase_config));
  } else {
    app = initializeApp(myRealConfig);
  }
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.error("Firebase initialization failed:", e);
  configError = true;
}

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

export { auth, db, configError };
export default app;
