// libs/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDS4_26HI8zfirQPpYoHkW8DYCoPNYZlg8",
  authDomain: "polygon-web-27d8c.firebaseapp.com",
  projectId: "polygon-web-27d8c",
  storageBucket: "polygon-web-27d8c.appspot.com",
  messagingSenderId: "609749509639",
  appId: "1:609749509639:web:e68809402e36e6c5d6eca2",
  measurementId: "G-DZVCMT76VB",
};

// Firebase 初期化（複数回初期化防止）
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// ✅ Firebase Firestore を追加
export const db = getFirestore(app);