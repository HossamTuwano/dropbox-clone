import { getStorage } from 'firebase/storage'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
//  Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCncWU8jFzVGq7137nfdA8IamgxbEPUmkg',
  authDomain: 'dropbox-clone-f57cb.firebaseapp.com',
  projectId: 'dropbox-clone-f57cb',
  storageBucket: 'dropbox-clone-f57cb.appspot.com',
  messagingSenderId: '855418422251',
  appId: '1:855418422251:web:ec920796e4541a827fcfae',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
