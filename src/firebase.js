// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIZoOD_qnXPO7xC5fnvQoXwPBjWO2Y8fY',
  authDomain: 'mini-chat-a381b.firebaseapp.com',
  projectId: 'mini-chat-a381b',
  storageBucket: 'mini-chat-a381b.appspot.com',
  messagingSenderId: '1041510413784',
  appId: '1:1041510413784:web:6f9a5433aeac9b578f6ead',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
