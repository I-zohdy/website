// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn2oi44Ok-I99HZlhnmvNNGJv3XlM4fG0",
  authDomain: "mi-french.firebaseapp.com",
  projectId: "mi-french",
  storageBucket: "mi-french.appspot.com", // recommended format (optional)
  messagingSenderId: "429104074318",
  appId: "1:429104074318:web:ac24308e1340e564173d1f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// ensureAuth: resolves when auth is available (signed in or newly signed in)
export function ensureAuth(timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    // If already signed in, resolve immediately
    if (auth.currentUser) return resolve(auth.currentUser);

    // try sign-in anonymously
    signInAnonymously(auth).catch(err => {
      // signInAnonymously can fail if anonymous provider is disabled
      reject(err);
    });

    // wait for auth state change
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        unsub();
        resolve(user);
      }
    });

    // optional timeout
    setTimeout(() => {
      unsub();
      reject(new Error("Auth timeout"));
    }, timeoutMs);
  });
}

/**
 * saveResult(resultObject)
 * resultObject example: { firstName, lastName, level, scores: { Linguistique: 7, ... } }
 */
export async function saveResult(result) {
  // ensure we are signed in (will throw if auth config disabled)
  await ensureAuth();
  const col = collection(db, "results");
  const payload = {
    ...result,
    createdAt: serverTimestamp()
  };
  const docRef = await addDoc(col, payload);
  return docRef.id;
}
